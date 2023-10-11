console.clear();

function handleLikeButtonClick(event) {
  const buttonElement = event.target;
  buttonElement.classList.toggle("post__button--liked");
}

const likeButton = document.querySelector('[data-js="like-button"]');
likeButton.addEventListener("click", handleLikeButtonClick);

// Exercise:
// Use document.createElement() and append another social media post to the body.

const section = document.createElement("section");
section.className = "post";

const text = document.createElement("p");
text.className = "[post__content]";
text.textContent = "Lorem ipsum dolor, sit amet consectetur adipisicing elit.";

const footer = document.createElement("footer");
footer.className = "[post__footer]";

const username = document.createElement("span");
username.className = "[post__username]";
username.textContent = "@username";

const button = document.createElement("button");
button.className = "[post__button]";
button.textContent = "♥ Like";

// console.log(section);

// Append the elements to the body
document.body.append(section);
section.append(text);
section.append(footer);
footer.append(username);
footer.append(button);

// Add an event listener to the like button
button.addEventListener("click", handleLikeButtonClick);
