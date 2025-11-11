// Enable interactive accordion behaviour for lesson toggles
const lessonToggles = document.querySelectorAll(".lesson-toggle");

lessonToggles.forEach((toggle) => {
  const contentId = toggle.getAttribute("aria-controls");
  const content = document.getElementById(contentId);

  toggle.addEventListener("click", () => {
    const isExpanded = toggle.getAttribute("aria-expanded") === "true";

    toggle.setAttribute("aria-expanded", String(!isExpanded));

    if (!isExpanded) {
      content.removeAttribute("hidden");
    } else {
      content.setAttribute("hidden", "");
    }
  });
});
