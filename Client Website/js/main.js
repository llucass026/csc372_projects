// Get the menu button element by its ID
const menuBtn = document.getElementById("menu-btn");

// Get the navigation links container element by its ID
const navLinks = document.getElementById("nav-links");

// Get the icon element inside the menu button
const menuBtnIcon = menuBtn.querySelector("i");

// Add a click event listener to the menu button
menuBtn.addEventListener("click", (e) => {
  // Toggle the 'open' class on the navigation links container
  navLinks.classList.toggle("open");

  // Check if the navigation links container has the 'open' class
  const isOpen = navLinks.classList.contains("open");

  // Set the icon class based on whether the navigation links container is open or not
  menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});

// Add a click event listener to the navigation links container
navLinks.addEventListener("click", (e) => {
  // Remove the 'open' class from the navigation links container
  navLinks.classList.remove("open");

  // Set the icon class to the menu icon
  menuBtnIcon.setAttribute("class", "ri-menu-line");
});


const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

ScrollReveal().reveal(".header__image img", {
  ...scrollRevealOption,
  origin: "right",
});
ScrollReveal().reveal(".header__content h1", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".header__content h2", {
  ...scrollRevealOption,
  delay: 1000,
});
ScrollReveal().reveal(".header__btn", {
  ...scrollRevealOption,
  delay: 1500,
});

ScrollReveal().reveal(".about__image img", {
  ...scrollRevealOption,
  origin: "left",
});
ScrollReveal().reveal(".about__content .section__header", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".about__content p", {
  ...scrollRevealOption,
  delay: 1000,
  interval: 500,
});
ScrollReveal().reveal(".about__btn", {
  ...scrollRevealOption,
  delay: 2000,
});

ScrollReveal().reveal(".blog__card", {
  duration: 1000,
  interval: 500,
});

ScrollReveal().reveal(".blog__btn", {
  ...scrollRevealOption,
  delay: 2000,
});

ScrollReveal().reveal(".contact__image img", {
  ...scrollRevealOption,
});