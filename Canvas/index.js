const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

ctx.fillRect(20, 40, 100, 100);

ctx.lineWidth = 3;
ctx.strokeStyle = "red";
ctx.strokeRect(200, 300, 100, 100);

ctx.fillStyle = "red";
ctx.fillRect(150, 100, 100, 100);

ctx.fillStyle = "orange";
ctx.fillRect(350, 40, 100, 100);

ctx.clearRect(400, 90, 50, 50);
// ctx.clearRect(200 - ctx.lineWidth, 300 - ctx.lineWidth, 50, 50);
