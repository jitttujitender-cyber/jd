/* ============================================================
   Tom Carter Drain & Plumbing — script.js
   ============================================================ */

(function () {
  "use strict";

  /* ── Sticky header ── */
  var header = document.querySelector(".site-header");
  if (header) {
    window.addEventListener("scroll", function () {
      header.classList.toggle("scrolled", window.scrollY > 30);
    }, { passive: true });
  }

  /* ── Mobile menu toggle ── */
  var toggle = document.querySelector(".menu-toggle");
  var nav    = document.querySelector(".main-nav");
  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var open = nav.classList.toggle("open");
      toggle.classList.toggle("open", open);
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
      toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
    });
    // Close on nav link click
    nav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        nav.classList.remove("open");
        toggle.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
        toggle.setAttribute("aria-label", "Open menu");
      });
    });
    // Close on outside click
    document.addEventListener("click", function (e) {
      if (!header.contains(e.target)) {
        nav.classList.remove("open");
        toggle.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
      }
    });
  }

  /* ── Active nav highlighting ── */
  var path = window.location.pathname;
  document.querySelectorAll(".main-nav a").forEach(function (a) {
    var href = a.getAttribute("href");
    if (!href) return;
    // Normalize
    var normPath = path.replace(/\/index\.html$/, "/").replace(/\/$/, "") || "/";
    var normHref = href.replace(/\/index\.html$/, "/").replace(/\/$/, "") || "/";
    if (normPath.endsWith(normHref) && normHref !== "") {
      a.classList.add("active");
    }
  });

  /* ── FAQ Accordion ── */
  document.querySelectorAll(".faq-q").forEach(function (btn) {
    btn.addEventListener("click", function () {
      var item   = btn.closest(".faq-item");
      var answer = item.querySelector(".faq-a");
      var isOpen = item.classList.contains("open");

      // Close all
      document.querySelectorAll(".faq-item.open").forEach(function (openItem) {
        openItem.classList.remove("open");
        var a = openItem.querySelector(".faq-a");
        if (a) a.style.maxHeight = "0";
        var i = openItem.querySelector(".faq-icon");
        if (i) i.textContent = "+";
      });

      if (!isOpen) {
        item.classList.add("open");
        answer.style.maxHeight = answer.scrollHeight + "px";
        var icon = btn.querySelector(".faq-icon");
        if (icon) icon.textContent = "×";
      }
      btn.setAttribute("aria-expanded", !isOpen ? "true" : "false");
    });
    btn.setAttribute("aria-expanded", "false");
  });

  /* ── Scroll reveal ── */
  var revealEls = document.querySelectorAll(".reveal");
  if (revealEls.length && "IntersectionObserver" in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    revealEls.forEach(function (el) { io.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add("visible"); });
  }

  /* ── Contact form validation & success ── */
  var form = document.getElementById("contact-form");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var valid = true;
      form.querySelectorAll("[required]").forEach(function (field) {
        if (!field.value.trim()) {
          field.style.borderColor = "#e74c3c";
          field.addEventListener("input", function () {
            field.style.borderColor = "";
          }, { once: true });
          valid = false;
        }
      });
      if (!valid) return;
      var msg = document.getElementById("form-success");
      if (msg) {
        msg.style.display = "block";
        form.reset();
        msg.scrollIntoView({ behavior: "smooth", block: "nearest" });
      }
    });
  }

  /* ── Smooth scroll for anchor links ── */
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener("click", function (e) {
      var id = anchor.getAttribute("href").slice(1);
      if (!id) return;
      var target = document.getElementById(id);
      if (target) {
        e.preventDefault();
        var top = target.getBoundingClientRect().top + window.pageYOffset;
        var headerH = parseInt(getComputedStyle(document.documentElement).getPropertyValue("--header-h")) || 72;
        window.scrollTo({ top: top - headerH - 16, behavior: "smooth" });
      }
    });
  });

  /* ── Lazy-load images polyfill for older browsers ── */
  if ("loading" in HTMLImageElement.prototype === false) {
    var lazyImgs = document.querySelectorAll("img[loading='lazy']");
    if ("IntersectionObserver" in window) {
      var imgObs = new IntersectionObserver(function (entries, obs) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            var img = entry.target;
            if (img.dataset.src) img.src = img.dataset.src;
            obs.unobserve(img);
          }
        });
      });
      lazyImgs.forEach(function (img) { imgObs.observe(img); });
    }
  }

})();
