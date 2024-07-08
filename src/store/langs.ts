import { create } from 'zustand';
import { PLAN, Plan } from './plan';
import { isAccessPlan } from './utils/isAccessPlan';

// lang key code ISO 639-3
export const LANGS: Record<
  string,
  {
    text: string;
    plans: Plan[];
    value: number;
  }
> = {
  ell: {
    text: 'Ελληνικά',
    plans: [PLAN.free, PLAN.premium],
    value: 0,
  },
  eng: {
    text: 'English',
    plans: [PLAN.premium],
    value: 1,
  },
  rus: {
    text: 'Русский',
    plans: [PLAN.premium],
    value: 2,
  },
} as const;

type State = {
  langs: typeof LANGS;
};

export const useStoreLangs = create<State>(() => ({
  langs: LANGS,
}));

export const selectorLangsDropdown = (userPlan: Plan) => (state: State) => {
  return Object.entries(state.langs).map(([, v]) => {
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

export const selectorLangsPlan = (plan: Plan) => (state: State) => {
  return Object.entries(state.langs)
    .filter(([, v]) => isAccessPlan(v.plans, plan))
    .map(([, v]) => v.text);
};

export const selectorLangsPremium = selectorLangsPlan(PLAN.premium);
