console.clear();

const url = "https://swapi.dev/api/people";

// function fetchData() {
//   fetch(url)
//     .then((response) => response.json())
//     .then((data) => {
//       console.log(data);
//     })

//     .catch((error) => {
//       console.error("Error fetching data:", error);
//     });
// }

async function fetchData() {
  try {
    const response = await fetch(url);

    if (response.ok) {
      // Success (Good Response)
      const data = await response.json();
      console.log(data);
      return data;
    } else {
      // Failure (Bad Response)
      console.error("Bad Response");
    }
  } catch (error) {
    // Failure (Network error, etc)
    console.error("An Error occurred", error);
  }
}

fetchData();
