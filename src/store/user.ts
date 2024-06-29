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

    const data = ENV.DEV
      ? 'user=%7B%22id%22%3A182531780%2C%22first_name%22%3A%22Nikita%22%2C%22last_name%22%3A%22Stroganov%22%2C%22username%22%3A%22findoss%22%2C%22language_code%22%3A%22ru%22%2C%22is_premium%22%3Atrue%2C%22allows_write_to_pm%22%3Atrue%7D&chat_instance=-7270973264668056357&chat_type=private&auth_date=1719526474&hash=224ca4a288bd461e3ce069ac55746757c6939021c1a9fd870c2515899d6da507'
      : TG.WebApp.initData;

    const raw = await fetch(`${host}/api/telegram-auth`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ data }),
    });

    const response = await raw.json();

    console.log(response);

    if (response.error !== undefined) {
      return { error: response.error.message };
    }

    set((state) => ({
      ...state,
      plan: response.user.tg_quiz_plan,
    }));

    return response;
  },
}));

export const selectorUserPlan = (state) => state.plan;
