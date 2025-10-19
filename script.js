// Updates the user's time in milliseconds every second.
function updateTime() {
  const timeSpan = document.querySelector('[data-testid="test-user-time"]');
  if (timeSpan) {
    timeSpan.textContent = Date.now();
  }
}
updateTime();
setInterval(updateTime, 1000);

// (Optional) Enhance keyboard accessibility with visible focus for all links/buttons
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("a, button").forEach(el => {
    el.addEventListener("keyup", e => {
      if (e.key === "Tab") {
        el.style.outline = "2px solid #2563eb";
      }
    });
    el.addEventListener("blur", () => {
      el.style.outline = "";
    });
  });
});
