import { create } from 'zustand';
import { CATEGORIES } from './categories';
import { LANGS } from './langs';
import { MODES } from './mode';

type ValueCategories = (typeof CATEGORIES)[keyof typeof CATEGORIES]['value'];
type ValueLang = (typeof LANGS)[keyof typeof LANGS]['value'];
type ValueMode = (typeof MODES)[keyof typeof MODES]['value'];

type State = {
  category: ValueCategories;
  lang: ValueLang;
  mode: ValueMode;
};

type Actions = {
  setQuizSetting: (key: keyof State, value: any) => void;
};

export const useStoreQuizSettings = create<State & Actions>((set) => ({
  category: CATEGORIES.demo.value,
  lang: LANGS.ell.value,
  mode: MODES.education.value,

  setQuizSetting: (key, value) => set((state) => ({ ...state, [key]: value })),
}));
