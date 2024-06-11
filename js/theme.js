import setChartTheme from "./charts.js";

// getting elements
const html = document.querySelector("html");
const themeSwitch = document.querySelector("#theme-switch");

// necessary variables
let isDark = localStorage.isDark ? JSON.parse(localStorage.isDark) : false;

// functionality
function setTheme(isDark) {
  if (isDark) html.classList.add("dark");
  else html.classList.remove("dark");
}

function switchTheme() {
  isDark = !isDark;
  localStorage.isDark = JSON.stringify(isDark);
  setTheme(isDark);
  setChartTheme();
}

// automatic functionality
setTheme(isDark);
setChartTheme();

// all actions
themeSwitch.addEventListener("click", () => switchTheme());
