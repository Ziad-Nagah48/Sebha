document.addEventListener("DOMContentLoaded", (event) => {
  let count = 0;

  const countDisplay = document.getElementById("count-display");
  const countButton = document.getElementById("count-button");
  const resetButton = document.getElementById("reset-button");

  countButton.addEventListener("click", () => {
    count++;
    countDisplay.textContent = count;
  });

  resetButton.addEventListener("click", () => {
    count = 0;
    countDisplay.textContent = count;
  });
});
