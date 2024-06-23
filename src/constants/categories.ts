import PLANS from './plans';

const CATEGORIES = [
  {
    key: '-1',
    text: `Demo`,
    isPremium: false,
    value: '-1',
  },
  {
    key: '0',
    text: `Any Category`,
    isPremium: true,
    value: '0',
  },
  {
    key: 9,
    text: `Category 1`,
    isPremium: true,
    value: 9,
  },
  {
    key: 10,
    text: `Category 2`,
    isPremium: true,
    value: 10,
  },
  {
    key: 11,
    text: `Category 3`,
    isPremium: true,
    value: 11,
  },
  {
    key: 12,
    text: `Category 4`,
    isPremium: true,
    value: 12,
  },
];

export const categoriesSelector = CATEGORIES.map((v) => {
  if (v.isPremium) {
    return {
      ...v,
      text: `${v.text} (${PLANS.premium})`,
    };
  }
  return v;
});

export const categoriesPremium = CATEGORIES.filter((v) => v.isPremium).map(
  (v) => v.text
);

export default CATEGORIES;
