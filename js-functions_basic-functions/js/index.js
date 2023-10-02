console.clear();

/*
1: Create the data for a book in an online store. Create variables for the following data:
  - the book title
  - the author
  - the rating
  - the number of sales
*/

const bookTitle = "The Universe";
const bookAuthor = "XYZ";
let bookRating = 4;
let numberOfSales = 630;

// --v-- write your code here --v--

// --^-- write your code here --^--

/*
2: Log all variables to the console, for example:

Title: The Lord of the Javascript
Author: Mario
Rating: 4.2
Sales: 120


Increase the number of sales and change the rating of the book afterwards.
Then log all variables to the console again.
*/

// console.log("Title: ", bookTitle);
// console.log("Author: ", bookAuthor);
// console.log("Rating: ", bookRating);
// console.log("Sales: ", numberOfSales);

// numberOfSales++;
// bookRating = 5;

// console.log(numberOfSales);
// console.log(bookRating);

// --v-- write your code here --v--

// --^-- write your code here --^--

/*
3: This code is quite repetitive and hard to read.
 - Write a function called logBookData which console logs all
   variables when it is called.
 - Then replace the console logs above with this function.
 - Now increase the number of sales 2 more times and log the data after each increase.
*/

// --v-- write your code here --v--

// --^-- write your code here --^--

function logBookData() {
  console.log("title:", bookTitle);
  console.log("author:", bookAuthor);
  console.log("rating:", bookRating);
  console.log("number of sales:", numberOfSales);
}

logBookData();

numberOfSales += 24;

logBookData();

numberOfSales += 34;

logBookData();
