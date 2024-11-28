const numberOfPallates = Number(prompt("Enter no. of palletes")) || 10;
const body = document.querySelector("body");

for (let i = 0; i < numberOfPallates; i++) {
  const div = document.createElement("div");
  div.classList.add("pallete");

  const r = Math.floor(Math.random() * 255);
  const g = Math.floor(Math.random() * 255);
  const b = Math.floor(Math.random() * 255);

  div.style.backgroundColor = `rgb(${r},${g},${b})`;
  body.append(div);
}
