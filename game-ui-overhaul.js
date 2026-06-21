(function () {
  var navLinks = Array.prototype.slice.call(document.querySelectorAll(".nav-links a[href^='#']"));
  var navItems = navLinks
    .map(function (link) {
      var href = link.getAttribute("href");
      var target = document.querySelector(href);
      if (href === "#contact" && (!target || target.offsetHeight < 2)) {
        target = document.querySelector("#finale");
      }
      return target ? { link: link, target: target } : null;
    })
    .filter(Boolean);

  function updateActiveMission() {
    var marker = window.scrollY + window.innerHeight * 0.35;
    var active = navItems[0];
    navItems.forEach(function (item) {
      if (item.target.offsetHeight > 1 && item.target.offsetTop <= marker) active = item;
    });

    navLinks.forEach(function (link) {
      var selected = active && link === active.link;
      link.classList.toggle("is-active", selected);
      if (selected) link.setAttribute("aria-current", "page");
      else link.removeAttribute("aria-current");
    });
  }

  window.addEventListener("scroll", updateActiveMission, { passive: true });
  window.addEventListener("resize", updateActiveMission);

  document.addEventListener("click", function (event) {
    var missionLink = event.target.closest(".hero-solid-actions a[href^='#']");
    if (!missionLink) return;
    var target = document.querySelector(missionLink.getAttribute("href"));
    if (missionLink.getAttribute("href") === "#contact" && (!target || target.offsetHeight < 2)) {
      target = document.querySelector("#finale");
    }
    if (!target) return;
    event.preventDefault();
    event.stopPropagation();
    if (typeof unlockHeroScroll === "function") unlockHeroScroll();
    window.requestAnimationFrame(function () {
      window.scrollTo({ top: target.offsetTop, behavior: "smooth" });
    });
  }, true);

  updateActiveMission();
})();
