import { create } from 'zustand';
import { PLAN, Plan } from './plan';

// lang key code ISO 639-3
export const LANGS = {
  ell: {
    text: 'Ελληνικά',
    plan: PLAN.free,
    value: 0,
  },
  eng: {
    text: 'English',
    plan: PLAN.premium,
    value: 1,
  },
  rus: {
    text: 'Русский',
    plan: PLAN.premium,
    value: 2,
  },
} as const;

type State = {
  langs: typeof LANGS;
};

export const useStoreLangs = create<State>(() => ({
  langs: LANGS,
}));

export const selectorLangsDropdown = (state: State) => {
  return Object.entries(state.langs).map(([k, v]) => {
    return {
      key: k,
      value: k,
      text: v.plan === PLAN.premium ? `${v.text} (${PLAN.premium})` : v.text,
      ...(v.plan === PLAN.premium && { disabled: true }),
    };
  });
};

export const selectorLangsPlan = (plan: Plan) => (state: State) => {
  return Object.entries(state.langs)
    .filter(([, v]) => v.plan === plan)
    .map(([, v]) => v.text);
};

export const selectorLangsPremium = selectorLangsPlan(PLAN.premium);
