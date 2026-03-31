const themes = ["slate", "paper", "mist", "sky", "ember"];
const themeToggle = document.querySelector(".theme-toggle");
const flameTrigger = document.querySelector(".flame-trigger");
let themeIndex = 0;

const setTheme = (index) => {
  themeIndex = index % themes.length;
  document.body.dataset.theme = themes[themeIndex];
};

themeToggle.addEventListener("click", (event) => {
  event.preventDefault();
  event.stopPropagation();
  setTheme(themeIndex + 1);
});

setTheme(1);
flameTrigger.textContent = "[ ]";
