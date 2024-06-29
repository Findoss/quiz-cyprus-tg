import { create } from 'zustand';

import { TG } from '../libs/telegram';
import { ENV } from '../libs/env';

import { PLAN, Plan } from './plan';

export const useStoreUser = create((set) => ({
  user: TG.WebApp.initDataUnsafe,
  plan: PLAN.free,
  updatePlan: (plan: Plan) => set({ plan: plan }),
  auth: async () => {
    const host = ENV.DEV
      ? 'http://localhost:1337'
      : 'https://4a26-87-228-147-110.ngrok-free.app';

    const raw = await fetch(`${host}/api/telegram-auth`, {
      method: 'POST',
      body: JSON.stringify({ data: TG.WebApp.initData }),
    });

    const response = await raw.json();

    // console.log('response', response);

    if (response.error.message) {
      return { error: response.error.message };
    }
    return { data: response.data.jwt };
  },
}));

export const selectorUserPlan = (state) => state.plan;
