// lang code ISO 639-3

import PLANS from './plans';

const LANGS = [
  {
    key: 'ell',
    text: 'Ελληνικά',
    isPremium: false,
    value: 'ell',
  },
  {
    key: 'eng',
    text: `English`,
    isPremium: true,
    value: 'eng',
  },
  {
    key: 'rus',
    text: `Русский`,
    isPremium: true,
    value: 'rus',
  },
];

export const langsSelector = LANGS.map((v) => {
  if (v.isPremium) {
    return {
      ...v,
      text: `${v.text} (${PLANS.premium})`,
    };
  }
  return v;
});

export const langsPremium = LANGS.filter((v) => v.isPremium).map((v) => v.text);

export default LANGS;
