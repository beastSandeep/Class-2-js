const box = document.getElementById("box");

let posX = 0;
let posY = 0;

window.addEventListener("keydown", (e) => {
  const key = String(e.key).toLowerCase();

  if (key === "w") {
    posY -= 5;
    box.style.top = `${posY}px`;
  }

  if (key === "a") {
    posX -= 5;
    box.style.left = `${posX}px`;
  }
  if (key === "d") {
    posX += 5;
    box.style.left = `${posX}px`;
  }

  if (key === "s") {
    posY += 5;
    box.style.top = `${posY}px`;
  }
});
