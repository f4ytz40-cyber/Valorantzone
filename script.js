(() => {
  const cfg = window.VZ_CONFIG || {};
  const invite = cfg.discordInvite || "https://discord.gg/SEU-CONVITE";
  const email = cfg.contactEmail || "contato@seuemail.com";

  document.querySelectorAll("[data-discord-link]").forEach((el) => {
    el.href = invite;
    if (el.classList.contains("mini-link")) el.textContent = invite.replace(/^https?:\/\//, "") + " ↗";
  });
  document.querySelectorAll("[data-contact-email]").forEach((el) => {
    el.href = `mailto:${email}`;
    if (el.matches("a") && !el.hasAttribute("data-contact-email-text")) el.textContent = email;
  });
  document.querySelectorAll("[data-contact-email-text]").forEach((el) => el.textContent = email);

  const year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();

  const toggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".main-nav");
  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      const open = nav.classList.toggle("open");
      toggle.setAttribute("aria-expanded", String(open));
    });
    nav.querySelectorAll("a").forEach((a) => a.addEventListener("click", () => nav.classList.remove("open")));
  }

  const reveals = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    reveals.forEach((el) => obs.observe(el));
  } else {
    reveals.forEach((el) => el.classList.add("visible"));
  }
})();
