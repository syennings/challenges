console.clear();

const runner1 = document.querySelector('[data-js="runner"]:nth-of-type(1)');
const runner2 = document.querySelector('[data-js="runner"]:nth-of-type(2)');
const runner3 = document.querySelector('[data-js="runner"]:nth-of-type(3)');

const startRaceButton = document.querySelector('[data-js="start-race-button"]');

// You'll need to change something about this callback function:
//                                         ↙️

startRaceButton.addEventListener("click", async () => {
  startRaceButton.setAttribute("disabled", "");

  try {
    await animateRunner(runner1);
    await animateRunner(runner2);
    await animateRunner(runner3);
  } catch (error) {
    // Handle any errors that may occur during animation
    console.error("An error occurred during the race:", error);
  } finally {
    // Enable the start button after the race is completed (whether successful or not)
    startRaceButton.removeAttribute("disabled");
  }
});

/**
 * Hint 1:
 * The relay runners are already available in the global scope as `runner1`,
 * `runner2` and `runner3`.
 *
 * Hint 2:
 * Use `animateRunner(runnerX)` to animate the runners.
 *
 * Hint 3:
 * The `animateRunner` function returns a promise which resolves when the animation is done.
 **/

// --v-- write your code here --v--

// --^-- write your code here --^--

/**
 * This is a wrapper around the Web Animations API
 * that allows us to use async/await to animate a ball.
 * It returns a promise that resolves when the animation is finished.
 */
function animateRunner(runnerElement) {
  return runnerElement.animate(
    [{ translate: "0 0" }, { translate: "180px 0" }],
    { duration: 2000, fill: "forwards" }
  ).finished;
}
