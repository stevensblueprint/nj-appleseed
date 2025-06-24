document.addEventListener("DOMContentLoaded", () => {
  const labels = document.querySelectorAll(".manual-label");
  labels.forEach((label) => {
    label.addEventListener("click", () => {
      const topEl = document.getElementById("manual-top");
      if (topEl) {
        topEl.scrollIntoView({ behavior: "smooth" });
      }
    });
  });
});
