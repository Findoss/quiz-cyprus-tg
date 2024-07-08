import { CATEGORIES } from './categories';
import { PLAN } from './plan';

export const Q = [
  {
    plan: [PLAN.free, PLAN.premium],
    category: CATEGORIES.category1,
    question:
      'In CSS, which of these values CANNOT be used with the &quot;position&quot; property?',
    correct_answer: 'center',
    incorrect_answers: ['static', 'absolute', 'relative'],
  },
  {
    plan: [PLAN.free, PLAN.premium],
    category: CATEGORIES.category2,
    type: 'multiple',
    question: 'How long is an IPv6 address?',
    correct_answer: '128 bits',
    incorrect_answers: ['32 bits', '64 bits', '128 bytes'],
  },
  {
    plan: [PLAN.free, PLAN.premium],
    category: CATEGORIES.category3,
    question: 'In the server hosting industry IaaS stands for...',
    correct_answer: 'Infrastructure as a Service',
    incorrect_answers: [
      'Internet as a Service',
      'Internet and a Server',
      'Infrastructure as a Server',
    ],
  },
  {
    plan: [PLAN.premium],
    category: CATEGORIES.category1,
    question:
      'How many bits make up the significand portion of a single precision floating point number?',
    correct_answer: '23',
    incorrect_answers: ['8', '53', '15'],
  },
  {
    plan: [PLAN.premium],
    category: 'Science: Computers',
    question:
      'In programming, what do you call functions with the same name but different implementations?',
    correct_answer: 'Overloading',
    incorrect_answers: ['Overriding', 'Abstracting', 'Inheriting'],
  },
];
