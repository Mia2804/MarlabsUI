var canvas = document.querySelector("canvas")

canvas.width = window.innerWidth
canvas.height = window.innerHeight;

// var c = canvas.getContext('2d');

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
// for (let i = 0; i < 100; i++) {
//     var x = Math.random() * window.innerHeight;
//     var y = Math.random() * window.innerWidth;
//     c.beginPath();
//     c.arc(x,y,30,0, Math.PI*2, false)
//     c.strokeStyle = "black"
//     // c.fillStyle = "red"
//     // c.fill()
//     for (let j = 0; j<100; j++) {
//         var randomColor = Math.floor(Math.random()*16777215).toString(16);
//         c.fillStyle = "#" + randomColor;
// or just use trick:
// c.fillStyle = "#" + i*3;
//         c.fill()
//     }
//     c.stroke();
// }

// introduce to animate function: play again and again!!
// NOTICE! innerwidth, innerHeight is import
//0. make a random circle: using animate
//1. make the circle move: dx/dy
//2. clean the path: c.clearRect
//3. reflect when we get the border of page-> bounce around: logic
//4. many circles bounce around: logic




var c = canvas.getContext('2d');
var circles = [];
function Circle(radius, xpos, ypos, dx, dy) {
    this.radius = radius;
    this.xpos = xpos;
    this.ypos = ypos;
    this.dx = dx;
    this.dy = dy;
}

Circle.prototype.update = function() {
    c.beginPath();
    c.arc(this.xpos,this.ypos,10,0, Math.PI*2, false)
    c.fillStyle ='rgba(185, 211, 238)'
    c.fill();
    c.stroke();
    if(this.xpos+this.radius > innerWidth || this.xpos-this.radius < 0){
        this.dx = -this.dx;
    }
    this.xpos+=this.dx

    if(this.ypos+this.radius > innerHeight || this.ypos-this.radius < 0){
        this.dy = -this.dy;
    }
    this.ypos+=this.dy
}

function drawCircles() {
    for (let i = 0; i < 300; i++) {
        var x = Math.random()* innerWidth;
        var y = Math.random()* innerHeight;
        var dx = (Math.random()-0.0005) * 10 // make it less than 5
        var dy = (Math.random()-0.0005) * 10
        var radius = 30;
        var circle = new Circle(radius, x, y, dx, dy)
        circles.push(circle)
    }
    animate();
}
drawCircles();

function animate() {
    c.clearRect(0,0,innerWidth, innerHeight)// clean the path
    for( let i = 0; i<circles.length;i++) { 
        var mycircle = circles[i];
        mycircle.update();
        
    }
    requestAnimationFrame(animate)
    }

animate();