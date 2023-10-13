const recipes = [
  {
    title: "Crepes",
    duration: 60,
    ingredients: ["butter", "flour", "eggs", "milk", "salt"],
    servings: 3,
  },
  {
    title: "Scrambled Eggs",
    duration: 20,
    ingredients: ["eggs", "milk", "salt"],
    servings: 2,
  },
  {
    title: "Vegan Salmon",
    duration: 60 * 24 * 3, // 3 days
    ingredients: [
      "carrots",
      "olive oil",
      "nori sheets",
      "liquid smoke",
      "soy sauce",
    ],
    servings: 10,
  },
  {
    title: "Carrot Cake",
    duration: 120,
    ingredients: ["carrots", "flour", "eggs", "salt", "milk", "sugar"],
    servings: 10,
  },
];

/*
 1: `map` exercises
*/

const onlyTitles = recipes.map((recipes) => {
  return { title: recipes.title };
});

console.log("titles:", onlyTitles);
// ['Crepes', ...]

const titlesWithDuration = recipes.map((recipes) => {
  return {
    title: recipes.title,
    duration: [`${recipes.duration} minutes`],
  };
});

console.log("titles with duration:", titlesWithDuration);

// null; // ['Crepes (60min)', ...]

// const timePerServing = null; // [20, 10, 432, 12]

const timePerServing = recipes.map((recipes) => {
  const calculation = recipes.duration / recipes.servings;

  return {
    calculation,
  };
});

console.log("time per serving", timePerServing);

// EXTRA:

// HINT: use first map() and then Array.prototype.join() with "method chaining" like so:
// myArray.map(...).join(', ');
const allTitlesInOneString = recipes.map((recipes) => recipes.title).join(", ");
console.log(allTitlesInOneString);

// 'Crepes, Scrambled Eggs, ...'

// For more information how to join an array,
// see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join#joining_an_array_four_different_ways

/*
 2: `filter` exercises
*/

const recipesThatOnlyTake60minutesOrLess = recipes.filter(
  (recipes) => recipes.duration <= 60
);
console.log(
  "recipesThatOnlyTake60minutesOrLess",
  recipesThatOnlyTake60minutesOrLess
);

const allRecipesWithMoreThan2Servings = recipes.filter(
  (recipes) => recipes.servings > 2
);
console.log("allRecipesWithMoreThan2Servings", allRecipesWithMoreThan2Servings);

const allRecipesWithTitlesLongerThan12Characters = recipes.filter(
  (recipes) => recipes.title.length > 12
);

console.log(
  "allRecipesWithTitlesLongerThan12Characters",
  allRecipesWithTitlesLongerThan12Characters
);

export {
  onlyTitles,
  titlesWithDuration,
  timePerServing,
  allTitlesInOneString,
  recipesThatOnlyTake60minutesOrLess,
  allRecipesWithMoreThan2Servings,
  allRecipesWithTitlesLongerThan12Characters,
};
