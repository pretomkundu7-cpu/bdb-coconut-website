// ========================================
// BDB COCONUT WEBSITE JAVASCRIPT
// ========================================

// Mobile Menu
const menuBtn = document.querySelector(".menu-btn");
const nav = document.querySelector(".nav nav");

if (menuBtn && nav) {
  menuBtn.addEventListener("click", () => {
    nav.classList.toggle("open");

    if (nav.classList.contains("open")) {
      menuBtn.textContent = "✕";
    } else {
      menuBtn.textContent = "☰";
    }
  });

  // Close menu after clicking a link
  document.querySelectorAll(".nav nav a").forEach((link) => {
    link.addEventListener("click", () => {
      nav.classList.remove("open");
      menuBtn.textContent = "☰";
    });
  });
}


// ========================================
// Scroll Reveal Animation
// ========================================

const revealElements = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.12
  }
);

revealElements.forEach((element) => {
  revealObserver.observe(element);
});


// ========================================
// Cursor Glow
// ========================================

const cursorGlow = document.querySelector(".cursor-glow");

if (cursorGlow && window.matchMedia("(pointer:fine)").matches) {

  window.addEventListener("pointermove", (event) => {

    cursorGlow.style.left = event.clientX + "px";
    cursorGlow.style.top = event.clientY + "px";

  });

}


// ========================================
// Current Year
// ========================================

const yearElement = document.getElementById("year");

if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}


// ========================================
// Smooth Anchor Scrolling
// ========================================

document.querySelectorAll('a[href^="#"]').forEach((link) => {

  link.addEventListener("click", function (event) {

    const targetId = this.getAttribute("href");

    if (!targetId || targetId === "#") {
      return;
    }

    const target = document.querySelector(targetId);

    if (target) {

      event.preventDefault();

      const headerHeight = 75;

      const targetPosition =
        target.getBoundingClientRect().top +
        window.pageYOffset -
        headerHeight;

      window.scrollTo({
        top: targetPosition,
        behavior: "smooth"
      });

    }

  });

});


// ========================================
// Small Parallax Effect
// ========================================

const heroVisual = document.querySelector(".hero-visual");

if (heroVisual && window.matchMedia("(pointer:fine)").matches) {

  window.addEventListener("mousemove", (event) => {

    const x = (window.innerWidth / 2 - event.clientX) / 80;
    const y = (window.innerHeight / 2 - event.clientY) / 80;

    heroVisual.style.transform =
      `translate(${x}px, ${y}px)`;

  });

}


// ========================================
// Console Branding
// ========================================

console.log(
  "%c BDB COCONUT ",
  "background:#8cff42;color:#071008;font-size:20px;font-weight:bold;padding:8px 15px;border-radius:8px;"
);

console.log(
  "Pure. Natural. Bangladesh. 🌴"
);
