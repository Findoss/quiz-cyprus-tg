import { create } from 'zustand';
import { PLAN, Plan } from './plan';

export const CATEGORIES = {
  demo: {
    text: `Demo`,
    plan: PLAN.free,
    value: 0,
  },
  allCategory: {
    text: `All Category`,
    plan: PLAN.premium,
    value: 1,
  },
  anyCategory: {
    text: `Any Category`,
    plan: PLAN.premium,
    value: 2,
  },
  Category1: {
    text: `Category1`,
    plan: PLAN.premium,
    value: 3,
  },
  Category2: {
    text: `Category2`,
    plan: PLAN.premium,
    value: 4,
  },
  Category3: {
    text: `Category3`,
    plan: PLAN.premium,
    value: 5,
  },
  Category4: {
    text: `Category4`,
    plan: PLAN.premium,
    value: 6,
  },
} as const;

type State = {
  categories: typeof CATEGORIES;
};

export const useStoreCategories = create<State>(() => ({
  categories: CATEGORIES,
}));

export const selectorCategoriesDropdown = (state: State) => {
  return Object.entries(state.categories).map(([k, v]) => {
    return {
      key: k,
      value: k,
      text: v.plan === PLAN.premium ? `${v.text} (${PLAN.premium})` : v.text,
      ...(v.plan === PLAN.premium && { disabled: true }),
    };
  });
};

export const selectorCategoriesPlan = (plan: Plan) => (state: State) => {
  return Object.entries(state.categories)
    .filter(([, v]) => v.plan === plan)
    .map(([, v]) => v.text);
};

export const selectorCategoriesPremium = selectorCategoriesPlan(PLAN.premium);
