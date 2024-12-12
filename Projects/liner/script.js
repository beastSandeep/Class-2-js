const svg = document.getElementById("svg");
svg.setAttribute("width", window.innerWidth);
svg.setAttribute("height", window.innerHeight);

let firstCircle = true;
let coordinates = { x1: 0, y1: 0 };

svg.addEventListener("click", function (e) {
  const x = e.clientX;
  const y = e.clientY;

  const circle = `<circle cx=${x} cy=${y} r="10" fill="black" stroke="lightgreen" stroke-width="2"/>`;
  svg.innerHTML += circle;

  if (firstCircle) {
    coordinates.x1 = x;
    coordinates.y1 = y;
  } else {
    const line = `<line x1=${coordinates.x1} y1=${coordinates.y1} x2=${x} y2=${y} stroke="gray" stroke-width="2" stroke-linecap="round" stroke-dasharray="5,5"/>`;
    svg.innerHTML += line;
  }

  firstCircle = !firstCircle;
});
