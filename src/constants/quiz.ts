import CATEGORIES from './categories';

export const QUIZ = [
  {
    category: 'Science: Computers',
    type: 'multiple',
    question:
      'In CSS, which of these values CANNOT be used with the &quot;position&quot; property?',
    correct_answer: 'center',
    incorrect_answers: ['static', 'absolute', 'relative'],
    options: ['static', 'relative', 'center', 'absolute'],
  },
  {
    category: 'Science: Computers',
    type: 'multiple',

    question: 'How long is an IPv6 address?',
    correct_answer: '128 bits',
    incorrect_answers: ['32 bits', '64 bits', '128 bytes'],
    options: ['128 bits', '64 bits', '128 bytes', '32 bits'],
  },
  {
    category: 'Science: Computers',
    type: 'multiple',
    question: 'In the server hosting industry IaaS stands for...',
    correct_answer: 'Infrastructure as a Service',
    incorrect_answers: [
      'Internet as a Service',
      'Internet and a Server',
      'Infrastructure as a Server',
    ],
    options: [
      'Infrastructure as a Service',
      'Internet and a Server',
      'Internet as a Service',
      'Infrastructure as a Server',
    ],
  },
  {
    category: 'Science: Computers',
    type: 'multiple',
    question:
      'How many bits make up the significand portion of a single precision floating point number?',
    correct_answer: '23',
    incorrect_answers: ['8', '53', '15'],
    options: ['53', '15', '8', '23'],
  },
  {
    category: 'Science: Computers',
    type: 'multiple',
    question:
      'In programming, what do you call functions with the same name but different implementations?',
    correct_answer: 'Overloading',
    incorrect_answers: ['Overriding', 'Abstracting', 'Inheriting'],
    options: ['Overriding', 'Inheriting', 'Abstracting', 'Overloading'],
  },
];

// NEW
export const QUIZZ = [
  {
    categories: ['demo'], //CATEGORIESS.demo],
    type: 'multiple',
    question: {
      ell: 'Στις 28 … γιορτάζουμε το ΟΧΙ που οι Έλληνες είπαν στους Ιταλούς.',
      rus: '«28 … мы празднуем ответ «Нет», данный греками итальянцам».',
      eng: '"28 ... we celebrate the answer" no "given by the Greeks to Italians."',
    },
    correctAnswer: {
      ell: '28 Οκτωβρίου',
      rus: '28 октября',
      eng: '28 october',
    },
    incorrectAnswers: [
      { ell: '29 Οκτωβρίου', rus: '29 октября', eng: '29 october' },
      { ell: '30 Οκτωβρίου', rus: '30 октября', eng: '30 october' },
      { ell: '31 Οκτωβρίου', rus: '31 октября', eng: '31 october' },
    ],
  },
];
