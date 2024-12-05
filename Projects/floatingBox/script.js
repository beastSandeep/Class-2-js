const box = document.getElementById("box");

let posX = 100;
let posY = 100;

window.addEventListener("keydown", (e) => {
  const key = String(e.key).toLowerCase();

  if (key === "w") {
    posY -= 5;
    box.style.top = `${posY}px`;
  }

  if (key === "s") {
    posY += 5;
    box.style.top = `${posY}px`;
  }
});
