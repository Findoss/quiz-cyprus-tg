import { create } from 'zustand';
import { PLAN, Plan } from './plan';
import { isAccessPlan } from './utils/isAccessPlan';

export const CATEGORIES: Record<
  string,
  {
    text: string;
    plans: Plan[];
    value: number;
  }
> = {
  demo: {
    text: `Demo`,
    plans: [PLAN.free, PLAN.premium],
    value: 0,
  },
  allCategory: {
    text: `All Category`,
    plans: [PLAN.premium],
    value: 1,
  },
  anyCategory: {
    text: `Any Category`,
    plans: [PLAN.premium],
    value: 2,
  },
  category1: {
    text: `Category1`,
    plans: [PLAN.premium],
    value: 3,
  },
  category2: {
    text: `Category2`,
    plans: [PLAN.premium],
    value: 4,
  },
  category3: {
    text: `Category3`,
    plans: [PLAN.premium],
    value: 5,
  },
  category4: {
    text: `Category4`,
    plans: [PLAN.premium],
    value: 6,
  },
} as const;

type State = {
  categories: typeof CATEGORIES;
};

export const useStoreCategories = create<State>(() => ({
  categories: CATEGORIES,
}));

export const selectorCategoriesDropdown =
  (userPlan: Plan) => (state: State) => {
    return Object.entries(state.categories).map(([, v]) => {
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

export const selectorCategoriesPlan = (plan: Plan) => (state: State) => {
  return Object.entries(state.categories)
    .filter(([, v]) => isAccessPlan(v.plans, plan))
    .map(([, v]) => v.text);
};

export const selectorCategoriesPremium = selectorCategoriesPlan(PLAN.premium);
