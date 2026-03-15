// Active nav link on scroll
var navLinks = document.querySelectorAll(".navbar-links a");
var sections = document.querySelectorAll("section[id]");

var sectionObserver = new IntersectionObserver(function (entries) {
  entries.forEach(function (entry) {
    if (entry.isIntersecting) {
      navLinks.forEach(function (link) {
        link.classList.remove("active");
        if (link.getAttribute("href") === "#" + entry.target.id) {
          link.classList.add("active");
        }
      });
    }
  });
}, { threshold: 0.4 });

sections.forEach(function (section) {
  sectionObserver.observe(section);
});

// Hamburger menu
var navbarToggle = document.getElementById("navbar-toggle");
var navbarLinks = document.getElementById("navbar-links");

navbarToggle.addEventListener("click", function () {
  navbarToggle.classList.toggle("open");
  navbarLinks.classList.toggle("open");
});

navbarLinks.querySelectorAll("a").forEach(function (link) {
  link.addEventListener("click", function () {
    navbarToggle.classList.remove("open");
    navbarLinks.classList.remove("open");
  });
});

var app = document.getElementById("app");

var typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});

typewriter
  .pauseFor(1000)
  .typeString("Support engineer. ATX → SFO.")
  .pauseFor(3000)
  .start();

var granimInstance = new Granim({
  element: "#canvas-image-blending",
  direction: "top-bottom",
  isPausedWhenNotInView: true,
  image: {
    source: "assets/pennybacker.jpg",
    blendingMode: "multiply",
  },
  states: {
    "default-state": {
      gradients: [
        ["#29323c", "#485563"],
        ["#FF6B6B", "#556270"],
        ["#80d3fe", "#7ea0c4"],
        ["#f0ab51", "#eceba3"],
      ],
      transitionSpeed: 8000,
    },
  },
});

