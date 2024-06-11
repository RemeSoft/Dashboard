const contactButton = document.querySelector("#contact-button");
const contactForm = document.querySelector("#contact-search");

// hide or open contact search
contactButton.addEventListener("click", () => {
  contactForm.classList.toggle("hidden");
});
