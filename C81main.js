var canvas = document.getElementById("myCanvas");
var color = "blue";
var ctx = canvas.getContext("2d");

ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth = 2;
ctx.arc(200, 200, 40, 0, 2 * Math.PI);
ctx.stroke();

canvas.addEventListener("mousedown", my_mousedown);

function my_mousedown(e){
    var mouseX = e.clientX - canvas.offsetLeft;
    var mouseY = e.clientY - canvas.offsetTop;
    console.log("x = " + mouseX + " y = " + mouseY);
    circle(mouseX, mouseY)
}
function circle(mouseX, mouseY){
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = 2;
    ctx.arc(mouseX, mouseY, 40, 0, 2 * Math.PI);
    ctx.stroke();
}