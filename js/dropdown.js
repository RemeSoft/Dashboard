const dropdown = document.querySelectorAll(".dropdown");

function handleDropdown(button) {
  const options = button.querySelector(".dropdown-options");
  console.log(options);
  options.classList.toggle("hidden");
}

dropdown.forEach((button) => {
  button.addEventListener("click", () => handleDropdown(button));
});
