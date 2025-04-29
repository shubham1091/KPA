const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
  hamburger.classList.toggle("active");
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    if (navLinks.classList.contains("active")) {
      navLinks.classList.remove("active");
      hamburger.classList.remove("active");
    }

    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

// Scroll animations
const fadeElements = document.querySelectorAll(".fade-in");
const actionItems = document.querySelectorAll(".action-item");
const qualItems = document.querySelectorAll(".qual-item");

// Add staggered delays to cards
actionItems.forEach((item, index) => {
  item.style.transitionDelay = `${index * 0.1}s`;
});

qualItems.forEach((item, index) => {
  item.style.transitionDelay = `${index * 0.1}s`;
});

// Intersection Observer for scroll animations
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
      }
    });
  },
  { threshold: 0.1 }
);

// Observe all animated elements
fadeElements.forEach((element) => {
  observer.observe(element);
});

actionItems.forEach((item) => {
  observer.observe(item);
});

qualItems.forEach((item) => {
  observer.observe(item);
});

// Initialize animations on page load
window.addEventListener("load", () => {
  setTimeout(() => {
    document.querySelectorAll(".fade-in").forEach((element) => {
      observer.observe(element);
    });
  }, 300);
});
