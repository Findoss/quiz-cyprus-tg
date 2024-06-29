import PLANS from './plans';

const CATEGORIES = [
  {
    key: -1,
    text: `Demo`,
    isPremium: false,
    value: '-1',
  },
  {
    key: 0,
    text: `All Category`,
    isPremium: true,
    value: '0',
  },
  {
    key: 1,
    text: `Any Category`,
    isPremium: true,
    value: 1,
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
      key: v.key,
      value: v.value,
      text: `${v.text} (${PLANS.premium})`,
      disabled: v.isPremium,
    };
  }

  delete v.isPremium;
  return v;
});

export const categoriesPremium = CATEGORIES.filter((v) => v.isPremium).map(
  (v) => v.text
);

export default CATEGORIES;

// NEW
const CATEGORIESS = {
  demo: {
    text: `Demo`,
    isPremium: false,
    value: 0,
  },
  allCategory: {
    text: `All Category`,
    isPremium: false,
    value: 1,
  },
  anyCategory: {
    text: `Any Category`,
    isPremium: false,
    value: 2,
  },
  Category1: {
    text: `Category1`,
    isPremium: false,
    value: 3,
  },
  Category2: {
    text: `Category2`,
    isPremium: false,
    value: 4,
  },
  Category3: {
    text: `Category3`,
    isPremium: false,
    value: 5,
  },
  Category4: {
    text: `Category4`,
    isPremium: false,
    value: 6,
  },
};
