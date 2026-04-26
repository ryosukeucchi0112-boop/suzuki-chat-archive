document.addEventListener("DOMContentLoaded", () => {
  const boot = document.getElementById("boot");

  setTimeout(() => {
    boot.classList.add("hide");
  }, 900);

  const fragments = document.querySelectorAll(".system-fragment");

  fragments.forEach((fragment, index) => {
    fragment.style.opacity = "0";

    setTimeout(() => {
      fragment.style.transition = "opacity 0.7s ease";
      fragment.style.opacity = "1";
    }, 1200 + index * 120);
  });

  const cards = document.querySelectorAll(".file-card");

  cards.forEach((card) => {
    card.addEventListener("mouseenter", () => {
      card.dataset.hovered = "true";
    });

    card.addEventListener("mouseleave", () => {
      card.dataset.hovered = "false";
    });
  });
});
