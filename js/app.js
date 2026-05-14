// js/app.js

// =========================
// LOADER
// =========================

window.addEventListener("load", () => {

  const loader = document.querySelector(".loader");

  setTimeout(() => {
    loader.classList.add("hide");
  }, 800);

});

// =========================
// MOBILE NAVBAR
// =========================

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// =========================
// CLOSE NAV ON CLICK
// =========================

document.querySelectorAll(".nav-links a")
.forEach(link => {

  link.addEventListener("click", () => {
    navLinks.classList.remove("active");
  });

});

// =========================
// SCROLL REVEAL ANIMATION
// =========================

const reveals = document.querySelectorAll(".reveal");

const revealOnScroll = () => {

  const windowHeight = window.innerHeight;

  reveals.forEach((element) => {

    const revealTop = element.getBoundingClientRect().top;

    if (revealTop < windowHeight - 100) {
      element.classList.add("active");
    } else {
      element.classList.remove("active");
    }

  });

};

window.addEventListener("scroll", revealOnScroll);

revealOnScroll();


// =========================
// NAVBAR SCROLL EFFECT
// =========================

window.addEventListener("scroll", () => {

  const navbar = document.querySelector(".navbar");

  if(window.scrollY > 50){
    navbar.style.padding = "15px 7%";
    navbar.style.background = "rgba(0,0,0,.7)";
  }
  else{
    navbar.style.padding = "20px 7%";
    navbar.style.background = "rgba(0,0,0,.4)";
  }

});

// =========================
// CLOSE NAVBAR WHEN CLICK OUTSIDE
// =========================

document.addEventListener("click", (e) => {

  const isMenuBtn = menuBtn.contains(e.target);
  const isNavLinks = navLinks.contains(e.target);

  if (!isMenuBtn && !isNavLinks) {
    navLinks.classList.remove("active");
  }

});