/* toggle icon navbar */
let menuIcon = document.querySelector("#menü-icon");
let navbar = document.querySelector(".navbar");

menuIcon.onclick = () => {
    menuIcon.classList.toggle("bx-x");
    navbar.classList.toggle("active");


};


/* scroll sections active link */
let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

/* sticky navbar */
let header = document.querySelector("header");
header.classList.toggle("sticky", window.scrollY > 100);

/* remove toggle icon and navbar when click navbar link(scroll) */



/* scroll sections active link */
navLinks.forEach(link => {
  link.onclick = () => {
    sections.forEach(sec => {
      let top = window.scrollY;
      let offset = sec.offsetTop - 150;
      let height = sec.offsetHeight;
      let id = sec.getAttribute("id");

      if (top >= offset && top < offset + height) {
        navLinks.forEach(links => {
          links.classList.remove("active");
          link.classList.add("active");
        });
      }
    });
    menuIcon.classList.remove("bx-x");
    navbar.classList.remove("active");
  };
});

ScrollReveal({ reset: true, 
  distance: "80px", 
  duration: 2000,
  delay: 200



});

ScrollReveal().reveal(".home-content, .heading, .erfahrungen2", { origin: "top" });
ScrollReveal().reveal(".home-img, .erfahrung-container, .portfolio-box", { origin: "bottom" });