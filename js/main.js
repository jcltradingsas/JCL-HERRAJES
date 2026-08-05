/* ============================================================
   JCL HERRAJES — main.js
   Animaciones con Motion (Framer Motion vía CDN) + vanilla JS
   ============================================================ */

(function () {
  "use strict";

  var Motion = window.Motion || null;

  /* ---------- Lucide icons ---------- */
  if (window.lucide && window.lucide.createIcons) {
    lucide.createIcons();
  }

  /* ---------- Navbar scrolled ---------- */
  var nav = document.getElementById("nav");
  function onScrollNav() {
    if (window.scrollY > 20) nav.classList.add("scrolled");
    else nav.classList.remove("scrolled");
  }
  window.addEventListener("scroll", onScrollNav, { passive: true });
  onScrollNav();

  /* ---------- Menú móvil ---------- */
  var menuToggle = document.getElementById("menuToggle");
  var navLinks = document.getElementById("navLinks");
  var menuIcon = menuToggle.querySelector("i");

  function setMenuIcon(open) {
    menuIcon.setAttribute("data-lucide", open ? "x" : "menu");
    if (window.lucide && window.lucide.createIcons) lucide.createIcons();
  }

  menuToggle.addEventListener("click", function () {
    var open = navLinks.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", open ? "true" : "false");
    setMenuIcon(open);
    document.body.style.overflow = open ? "hidden" : "";
  });

  navLinks.querySelectorAll("a").forEach(function (a) {
    a.addEventListener("click", function () {
      if (navLinks.classList.contains("open")) {
        navLinks.classList.remove("open");
        menuToggle.setAttribute("aria-expanded", "false");
        setMenuIcon(false);
        document.body.style.overflow = "";
      }
    });
  });

  /* ---------- Contador de estadísticas ---------- */
  function animateCount(el) {
    var target = parseInt(el.getAttribute("data-count"), 10) || 0;
    var suffix = el.getAttribute("data-suffix") || "";
    var duration = 1600;
    var start = null;

    function tick(ts) {
      if (!start) start = ts;
      var progress = Math.min((ts - start) / duration, 1);
      var eased = 1 - Math.pow(1 - progress, 3);
      el.textContent = Math.floor(eased * target) + suffix;
      if (progress < 1) requestAnimationFrame(tick);
      else el.textContent = target + suffix;
    }
    requestAnimationFrame(tick);
  }

  var statsDone = false;
  function runStats() {
    if (statsDone) return;
    statsDone = true;
    document.querySelectorAll("[data-count]").forEach(animateCount);
  }

  /* ---------- Scroll reveal ---------- */
  var revealEls = document.querySelectorAll("[data-reveal]");

  function revealInView() {
    revealEls.forEach(function (el) {
      el.classList.add("in-view");
    });
    if (window.IntersectionObserver) {
      revealEls.forEach(function (el) { observer.observe(el); });
    }
  }

  var observer = null;
  if (window.IntersectionObserver) {
    observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });
    revealEls.forEach(function (el) { observer.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add("in-view"); });
  }

  /* Observa las estadísticas para disparar el contador */
  var statsSection = document.querySelector(".hero-stats");
  if (statsSection && window.IntersectionObserver) {
    new IntersectionObserver(function (entries) {
      if (entries[0].isIntersecting) runStats();
    }, { threshold: 0.4 }).observe(statsSection);
  } else {
    runStats();
  }

  /* ---------- Animaciones con Motion (Framer Motion) ---------- */
  function heroEntrance() {
    var badge = document.getElementById("heroBadge");
    var title = document.getElementById("heroTitle");
    var sub = document.getElementById("heroSub");
    var actions = document.getElementById("heroActions");
    var stats = document.getElementById("heroStats");
    var visual = document.getElementById("heroVisual");

    var list = [badge, title, sub, actions, stats, visual];
    list.forEach(function (el, i) {
      if (!el) return;
      el.style.opacity = "0";
      Motion.animate(el, {
        opacity: 1,
        y: [30, 0]
      }, {
        duration: 0.8,
        delay: 0.12 * i,
        ease: "circOut"
      });
    });
  }

  if (Motion && typeof Motion.animate === "function") {
    try {
      heroEntrance();

      /* Flotación continua de las tarjetas del hero */
      var leftCard = document.querySelector(".card-left");
      var rightCard = document.querySelector(".card-right");
      if (leftCard) Motion.animate(leftCard, { y: [0, -12, 0] }, { duration: 5, repeat: Infinity, ease: "easeInOut" });
      if (rightCard) Motion.animate(rightCard, { y: [0, -12, 0] }, { duration: 5, repeat: Infinity, delay: 1.4, ease: "easeInOut" });

      /* Reveal con Motion.inView como refuerzo */
      if (typeof Motion.inView === "function") {
        revealEls.forEach(function (el) {
          if (el.classList.contains("in-view")) return;
          Motion.inView(el, function () {
            el.classList.add("in-view");
          });
        });
      }
    } catch (e) {
      /* Fallback: asegurar que todo quede visible */
      document.querySelectorAll("[data-reveal]").forEach(function (el) { el.classList.add("in-view"); });
      revealInView();
    }
  } else {
    /* Motion no cargó: fallback progresivo */
    revealInView();
    var hero = document.querySelectorAll(".hero-copy > *, #heroVisual");
    hero.forEach(function (el) { el.style.opacity = "1"; });
  }
})();
