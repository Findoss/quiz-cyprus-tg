import PLANS from './plans';

const NUM_OF_QUESTIONS = [
  { key: 5, text: '5', value: 5 },
  { key: 10, text: `10`, isPremium: true, value: 10 },
  { key: 25, text: `25`, isPremium: true, value: 25 },
  { key: 1000, text: `All`, isPremium: true, value: 1000 },
];

export const numOfQuestionsSelector = NUM_OF_QUESTIONS.map((v) => {
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

export default NUM_OF_QUESTIONS;
