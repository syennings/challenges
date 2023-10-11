console.clear();

const main = document.querySelector('[data-js="main"]');

// Part 1: Creating a Select Input

const languages = {
  DE: "German",
  EN: "English",
  ES: "Spanish",
  FR: "French",
  IT: "Italian",
  NL: "Dutch",
  PT: "Portuguese",
  RU: "Russian",
  ZH: "Chinese",
};

const select = document.createElement("select");
select.name = "languages";
main.append(select);

for (let key in languages) {
  const option = document.createElement("option");
  option.value = key;
  option.textContent = languages[key];
  select.append(option);
}

// --v-- write/change code here --v--

// --^-- write/change code here --^--

// Part 2: Creating a Navigation Bar

const nav = {
  home: { href: "/home", text: "Home" },
  about: { href: "/about", text: "About" },
  contact: { href: "/contact", text: "Contact" },
};

const navElement = document.createElement("nav");

const ul = document.createElement("ul");
main.append(navElement);
navElement.append(ul);

for (let key in nav) {
  const li = document.createElement("li");
  const anchor = document.createElement("a");

  anchor.href = nav[key].href; // Set the href attribute
  anchor.textContent = nav[key].text; // Set the text content

  ul.append(li);
  li.append(anchor);

  console.log(nav[key]);
}

// --v-- write/change code here --v--

// --^-- write/change code here --^--
