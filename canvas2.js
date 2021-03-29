var canvas = document.querySelector("canvas")

canvas.width = window.innerWidth
canvas.height = window.innerHeight;

var c = canvas.getContext('2d');

//draw some rectangles
// c.fillStyle = 'rgba(255,0,0,0.5)'
// c.fillRect(100,100,100,100);
// c.fillStyle = 'rgba(255,0,0,0.5)'
// c.fillRect(400,100,100,100);
// c.fillStyle = 'rgba(255,0,0,0.5)'
// c.fillRect(300,300,100,100);

//lines
// c.beginPath();
// c.moveTo(50,300);
// c.lineTo(300,100);
// c.lineTo(400,300);
// c.strokeStyle = "rgba(255,0,0,1)"
// c.stroke();

//arc
// c.beginPath();
// c.arc(300,300,30,0,Math.PI*2, false)
// c.strokeStyle = "blue"
// c.stroke();

//multiple circles in page-->for loop, add some logical
for (let i = 0; i < 100; i++) {
    var x = Math.random() * window.innerHeight;
    var y = Math.random() * window.innerWidth;
    c.beginPath();
    c.arc(x,y,30,0, Math.PI*2, false)
    c.strokeStyle = "black"
    // c.fillStyle = "red"
    // c.fill()
    for (let j = 0; j<100; j++) {
        var randomColor = Math.floor(Math.random()*16777215).toString(16);
        c.fillStyle = "#" + randomColor;
        c.fill()
    }
    c.stroke();
}
