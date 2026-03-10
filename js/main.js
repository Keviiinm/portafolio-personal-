// ===== NAVBAR SCROLL =====
const navbar = document.getElementById("navbar");
window.addEventListener("scroll", () => {
  if (window.scrollY > 40) {
    navbar.style.background = "rgba(7,7,7,0.98)";
    navbar.style.borderBottomColor = "rgba(255,60,0,0.1)";
  } else {
    navbar.style.background = "rgba(7,7,7,0.92)";
    navbar.style.borderBottomColor = "rgba(255,255,255,0.04)";
  }
});

// ===== ACTIVE NAV LINK =====
const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".nav-link");
window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach((sec) => {
    if (window.scrollY >= sec.offsetTop - 100) current = sec.id;
  });
  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href") === "#" + current)
      link.classList.add("active");
  });
});

// ===== HAMBURGER =====
const hamburger = document.getElementById("hamburger");
const navLinksList = document.querySelector(".nav-links");
hamburger.addEventListener("click", () => {
  navLinksList.style.display =
    navLinksList.style.display === "flex" ? "none" : "flex";
  navLinksList.style.flexDirection = "column";
  navLinksList.style.position = "absolute";
  navLinksList.style.top = "64px";
  navLinksList.style.left = "0";
  navLinksList.style.right = "0";
  navLinksList.style.background = "rgba(7,7,7,0.98)";
  navLinksList.style.padding = "1.5rem 2rem";
  navLinksList.style.gap = "1.2rem";
  navLinksList.style.borderBottom = "1px solid rgba(255,60,0,0.1)";
});

// ===== FADE IN ON SCROLL =====
const fadeEls = document.querySelectorAll(
  ".hero-content, .about-inner, .skills-inner, .portfolio-grid, .timeline-item, .exp-card, .hobby-card",
);
fadeEls.forEach((el) => el.classList.add("fade-in"));

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(
          () => {
            entry.target.classList.add("visible");
          },
          80 * (Array.from(fadeEls).indexOf(entry.target) % 5),
        );
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 },
);

fadeEls.forEach((el) => observer.observe(el));

// ===== SKILL CIRCLE ANIMATION =====
const skillCards = document.querySelectorAll(".skill-card");
const circleObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const card = entry.target;
        const percent = parseInt(card.dataset.percent);
        const fill = card.querySelector(".circle-fill");
        const circumference = 314; // 2 * pi * 50
        const offset = circumference - (percent / 100) * circumference;
        setTimeout(() => {
          fill.style.strokeDashoffset = offset;
        }, 200);
        circleObserver.unobserve(card);
      }
    });
  },
  { threshold: 0.4 },
);

skillCards.forEach((card) => circleObserver.observe(card));
