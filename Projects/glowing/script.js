function createGlow(x, y) {
  const glow = document.createElement("div");

  glow.classList.add("glow");
  glow.style.left = `${x}px`;
  glow.style.top = `${y}px`;

  document.body.append(glow);

  setTimeout(() => {
    glow.remove();
  }, 100);
}

window.addEventListener("mousemove", (e) => {
  createGlow(e.clientX, e.clientY);
});
