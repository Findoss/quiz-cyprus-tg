import { create } from 'zustand';
import { PLAN, Plan } from './plan';

const MODES: Record<string, { text: string; plan: Plan; value: number }> = {
  education: {
    text: 'Education',
    plan: PLAN.free,
    value: 0,
  },
  exam: {
    text: 'Exam',
    plan: PLAN.free,
    value: 1,
  },
} as const;

type State = {
  modes: typeof MODES;
};

export const useStoreMode = create<State>(() => ({
  modes: MODES,
}));

export const selectorDropdown = (state: State) => {
  return Object.entries(state.modes).map(([k, v]) => {
    return {
      key: k,
      value: k,
      text: v.plan === PLAN.premium ? `${v.text} (${PLAN.premium})` : v.text,
      ...(v.plan === PLAN.premium && { disabled: true }),
    };
  });
};
