import PLANS from './plans';

const NUM_OF_QUESTIONS = [
  { key: 5, text: '5', value: 5 },
  { key: 10, text: `10 (${PLANS.premium})`, value: 10 },
  { key: 25, text: `25 (${PLANS.premium})`, value: 25 },
  { key: 0, text: `All (${PLANS.premium})`, value: 200 },
];

export default NUM_OF_QUESTIONS;
