import { create } from 'zustand';

import { TG } from '../libs/telegram';
import { ENV } from '../libs/env';

import { PLAN, Plan } from './plan';

export const useStoreUser = create((set) => ({
  user: TG.WebApp.initDataUnsafe,
  plan: PLAN.free,
  updatePlan: (plan: Plan) => set({ plan: plan }),
  auth: async () => {
    const host = ENV.DEV ? ENV.VITE_HOST : ENV.VITE_HOST_NGROK;
    const data = ENV.DEV ? ENV.VITE_TG_USER_STRING : TG.WebApp.initData;

    const raw = await fetch(`${host}/api/telegram-auth`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ data }),
    });

    const response = await raw.json();

    if (response.error !== undefined) {
      return { error: response.error.message };
    }

    set((state) => ({
      ...state,
      plan: PLAN[response.user.tg_quiz_plan],
    }));

    return response;
  },
}));

export const selectorUserPlan = (state) => state.plan;
