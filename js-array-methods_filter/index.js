console.clear();

const cards = [
  {
    id: "1",
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
    tags: ["js", "next"],
  },
];

const onlyCardWithIdTwo = cards.filter((cards) => cards.id === "2");

console.log("Cards With ID Two:", onlyCardWithIdTwo);

const allCardsWith3Tags = cards.filter((cards) => cards.tags.length === 3);

console.log("cards with 3 tags:", allCardsWith3Tags);

// const allCardsThatAreNotBookmarked = cards.filter(
//   (cards) => cards.isBookmarked === false || null
// );
// console.log("cards that are not bookmarked:", allCardsThatAreNotBookmarked);

const allCardsThatAreNotBookmarked = cards.filter((card) => !card.isBookmarked);
console.log("unbookmarked cards", allCardsThatAreNotBookmarked);

const allCardsWithTagsHTMLOrJSThatAreBookmarked = cards.filter(
  (card) =>
    (card.tags.includes("html") || card.tags.includes("js")) &&
    card.isBookmarked
);

console.log(
  "allCardsWithTagsHTMLOrJSThatAreBookmarked",
  allCardsWithTagsHTMLOrJSThatAreBookmarked
);

export {
  onlyCardWithIdTwo,
  allCardsWith3Tags,
  allCardsThatAreNotBookmarked,
  allCardsWithTagsHTMLOrJSThatAreBookmarked,
};
