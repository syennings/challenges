console.clear();

const starContainer = document.querySelector('[data-js="star-container"]');
let userRating = 0;

function renderStars(filledStars) {
  // reset the star container before rerendering stars
  starContainer.innerHTML = "";

  for (let i = 1; i <= filledStars; i++) {
    console.log(i);

    const image = document.createElement("img");
    image.setAttribute("src", "./assets/star-filled.svg");
    starContainer.append(image);

    image.addEventListener("click", () => {
      userRating = i; // Update the userRating when a star is clicked.
      renderStars(userRating); // Re-render the stars with the new user rating.
    });
  }

  for (let i = 1; i <= 5 - filledStars; i++) {
    console.log(i);

    const image = document.createElement("img");
    image.setAttribute("src", "./assets/star-empty.svg");
    starContainer.append(image);

    image.addEventListener("click", () => {
      userRating = filledStars + i; // Update the userRating when an empty star is clicked.
      renderStars(userRating); // Re-render the stars with the new user rating.
    });
  }

  //--v-- your code here --v--

  //--^-- your code here --^--
}

renderStars(0);
