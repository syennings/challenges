console.clear();

const cards = [
  {
    id: "1",
    isBookmarked: false,
    question: "How often can I use <header>?",
    answer: "As often as you like.",
    tags: ["html", "elements", "basic"],
  },
  {
    id: "2",
    isBookmarked: false,
    question: "How often can I use <aside>?",
    answer: "As often as you like.",
    tags: ["html", "elements", "basic"],
  },
  {
    id: "3",
    isBookmarked: true,
    question: "On which types can I use destructuring assignment?",
    answer: "On Objects and Arrays",
    tags: ["js", "next", "advanced"],
  },
];

const lowerCaseAnswers = cards.map((cards) => {
  return cards.answer.toLowerCase();
});

console.log("Lower Case Answers:", lowerCaseAnswers);

// ['as often as you like.', ...]

const questionsAndAnswersTogether = cards.map((cards) => {
  return { questions: cards.question, answers: cards.answer };
});

console.log("Questions and Answers Together:", questionsAndAnswersTogether);
// ["How often can I use <header>? - As often as you like.", ...]

const questionAndAnswer = null; // [{ question: 'How often can I use <header>?', answer: 'As often as you like.'}, {...}]

export { lowerCaseAnswers, questionsAndAnswersTogether, questionAndAnswer };
