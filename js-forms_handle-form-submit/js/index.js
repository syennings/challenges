console.clear();

const form = document.querySelector('[data-js="form"]');

form.addEventListener("submit", (event) => {
  event.preventDefault();
  event.target.elements.firstName.focus();
  const formData = new FormData(event.target);

  //   console.log(formElements.firstName);
  //   console.log(formElements.firstName.value);

  //   console.log(formData);
  //   firstName.focus();
  //   event.target.elements.firstName.focus();
});

// console.log(firstName);
