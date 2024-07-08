import { create } from 'zustand';
import { PLAN, Plan } from './plan';
import { isAccessPlan } from './utils/isAccessPlan';

export const MODES: Record<
  string,
  { text: string; plans: Plan[]; value: number }
> = {
  education: {
    text: 'Education',
    plans: [PLAN.free],
    value: 0,
  },
  exam: {
    text: 'Exam',
    plans: [PLAN.free],
    value: 1,
  },
} as const;

type State = {
  modes: typeof MODES;
};

export const useStoreMode = create<State>(() => ({
  modes: MODES,
}));

export const selectorModesDropdown = (userPlan: Plan) => (state: State) => {
  return Object.entries(state.modes).map(([, v]) => {
    return {
      key: v.value,
      value: v.value,
      text: isAccessPlan(v.plans, userPlan)
        ? v.text
        : `${v.text} (${PLAN.premium})`,
      ...(!isAccessPlan(v.plans, userPlan) && { disabled: true }),
    };
  });
};
