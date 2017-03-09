//http://jsfiddle.net/czgrrn6m/

//HTML
<canvas id="canvas" width=800 height=600></canvas>

//CSS
    body {
      background-color: ivory;
    }
    
    canvas {
      border: 1px solid red;
    }

//JAVASCRIPT
var canvas = document.getElementById("canvas");
var btn = document.createElement("BUTTON");
var ctx = canvas.getContext("2d");

// set starting values

var fps = 60;
var percent = 0;
var direction = 1;

// start the animation
animate();
animate2();

function animate() {
    // set the animation position (0-100)
    percent += direction;
    if (percent < -25) {
        percent = -25;
        direction = 1;
    };
    if (percent > 200) {
        percent = 200;
    };

    draw(percent);

    // request another frame
    setTimeout(function () {
        requestAnimationFrame(animate);
    }, 2000 / fps);
}

function animate2() {
    // set the animation position (0-100)
    percent += direction;
    if (percent < 0) {
        percent = 0;
        direction = 1;
    };
    if (percent > 200) {
        percent = 200;
    };

    draw2(percent);

    // request another frame
    setTimeout(function () {
        requestAnimationFrame(animate);
    }, 2000 / fps);
}



function startarc() {
  ctx.beginPath();
  ctx.arc(280, 35, 10, 0, 2 * Math.PI);
  ctx.lineWidth = 2;
  ctx.fillStyle = "lightgreen";
  ctx.fill();
  ctx.strokeStyle = 'black';
  ctx.stroke();
}

function endarc() {
  ctx.beginPath();
  ctx.arc(280, 450, 10, 0, 2 * Math.PI);
  ctx.lineWidth = 2;
  ctx.fillStyle = "red";
  ctx.fill();
  ctx.strokeStyle = 'black';
  ctx.stroke();
}

function drawarc() {
   ctx.arc(700,75,20,0,2*Math.PI);
   ctx.stroke();
}

function drawrect() {
   ctx.rect(210, 20, 150, 40);
   ctx.lineWidth = 2;
   ctx.strokeStyle = 'black';
   ctx.stroke();
   
}

function drawrect1() {
   ctx.rect(30, 170, 150, 40);
   ctx.lineWidth = 2;
   ctx.strokeStyle = 'black';
   ctx.stroke();
   
}

function drawrect2() {
   ctx.rect(400, 170, 150, 40);
   ctx.lineWidth = 2;
   ctx.strokeStyle = 'black';
   ctx.stroke();
   
}

function drawrect3() {
   ctx.rect(210, 320, 150, 40);
   ctx.lineWidth = 2;
   ctx.strokeStyle = 'black';
   ctx.stroke();
   
}

// draw the current frame based on sliderValue
function draw(sliderValue) {
    // redraw path
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.lineWidth = 5;

    ctx.beginPath();
    ctx.moveTo(280, 35);
    ctx.quadraticCurveTo(100, 50, 100, 170);
    ctx.strokeStyle = 'gray';
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(100, 210);
    ctx.quadraticCurveTo(100, 300, 210, 340);
    ctx.strokeStyle = 'gray';
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(360, 330);
    ctx.bezierCurveTo(600, 250, 500, 450, 360, 350);
    ctx.strokeStyle = 'gray';
    ctx.stroke();
    
    //PATH 2.1
    ctx.beginPath();
    ctx.moveTo(290, 35);
    ctx.quadraticCurveTo(480, 30, 470, 170);
    ctx.strokeStyle = 'gray';
    ctx.stroke();
    
    //PATH 2.2
    ctx.beginPath();
    ctx.moveTo(400, 180);
    ctx.quadraticCurveTo(280, 100, 180, 180);
    ctx.strokeStyle = 'gray';
    ctx.stroke();
    
    //PATH 2.3
    ctx.beginPath();
    ctx.moveTo(180, 200);
    ctx.quadraticCurveTo(280, 300, 400, 200);
    ctx.strokeStyle = 'gray';
    ctx.stroke();
    
     //PATH 2.4 END
    ctx.beginPath();
    ctx.moveTo(550, 180);
    ctx.quadraticCurveTo(700, 400, 280, 450);
    ctx.strokeStyle = 'gray';
    ctx.stroke();

    //PATH 1 END
    ctx.beginPath();
    ctx.moveTo(280, 360);
    ctx.lineTo(280, 450);
    ctx.strokeStyle = 'gray';
    ctx.stroke();
    
    drawrect1();
    drawrect2();
    drawrect3();
    startarc();
    endarc();
    
    // draw the tracking rectangle
    var xy;
    
    
    //RED
    if (sliderValue < 25) {
        var percent = sliderValue / 24;
        xy = getQuadraticBezierXYatPercent({
            x: 280,
            y: 35
        }, {
            x: 100,
            y: 50
        }, {
            x: 100,
            y: 170
        }, percent);       
    } 
     //GREEN
     else if (sliderValue < 50) {
        var percent = (sliderValue - 25) / 24
        xy = getQuadraticBezierXYatPercent({
            x: 100,
            y: 210
        }, {
            x: 100,
            y: 300
        }, {
            x: 210,
            y: 340
        }, percent);
    }
     //BLUE
     else if (sliderValue < 75) {
        var percent = (sliderValue - 50) / 24
        xy = getCubicBezierXYatPercent({
            x: 360,
            y: 330
        }, {
            x: 600,
            y: 250
        }, {
            x: 500,
            y: 450
        }, {
            x: 360,
            y: 350
        }, percent);
    }
     //PAHT 1 END
     else if (sliderValue < 100){
        var percent = (sliderValue - 75) / 24
        xy = getLineXYatPercent({
            x: 280,
            y: 360
        }, {
            x: 280,
            y: 450
        }, percent);
    }
    //PAHT 2.1
      else  if (sliderValue < 125) {
        var percent = sliderValue / 24
        xy = getQuadraticBezierXYatPercent({
            x: 290,
            y: 35
        }, {
            x: 480,
            y: 30
        }, {
            x: 470,
            y: 170
        }, percent);
    } 
    //PAHT 2.2
    else  if (sliderValue < 150) {
        var percent = (sliderValue - 125) / 24
        xy = getQuadraticBezierXYatPercent({
            x: 400,
            y: 180
        }, {
            x: 280,
            y: 100
        }, {
            x: 180,
            y: 180
        }, percent);
    }
    //PAHT 2.3
    else  if (sliderValue < 175) {
        var percent = (sliderValue - 150) / 24
        xy = getQuadraticBezierXYatPercent({
            x: 180,
            y: 200
        }, {
            x: 280,
            y: 300
        }, {
            x: 400,
            y: 200
        }, percent);
    } 
     //PAHT 2.4
    else  {
        var percent = (sliderValue - 175) / 25
        xy = getQuadraticBezierXYatPercent({
            x: 550,
            y: 180
        }, {
            x: 700,
            y: 400
        }, {
            x: 280,
            y: 450
        }, percent);
    }   
    drawRect(xy, "red");
}

function draw2(sliderValue) {
var zj;
  //PAHT 2.1
    if (sliderValue < 25) {
      var percent = sliderValue / 24
      zj = getQuadraticBezierXYatPercent({
          z: 290,
          j: 35
      }, {
          z: 480,
          j: 30
      }, {
          z: 470,
          j: 170
      }, percent);
  } 
  //PAHT 2.2
  else  if (sliderValue < 50) {
      var percent = (sliderValue - 25) / 24
      zj = getQuadraticBezierXYatPercent({
          z: 400,
          j: 180
      }, {
          z: 280,
          j: 100
      }, {
          z: 180,
          j: 180
      }, percent);
  }
  //PAHT 2.3
  else  if (sliderValue < 75) {
      var percent = (sliderValue - 50) / 24
      zj = getQuadraticBezierXYatPercent({
          z: 180,
          j: 200
      }, {
          z: 280,
          j: 300
      }, {
          z: 400,
          j: 200
      }, percent);
  } 
   //PAHT 2.4
  else  {
      var percent = (sliderValue - 75) / 25
      zj = getQuadraticBezierXYatPercent({
          z: 550,
          j: 180
      }, {
          z: 700,
          j: 400
      }, {
          z: 280,
          j: 450
      }, percent);
  }   
  drawRect2(zj, "black");
  
}


// draw tracking rect at xy
function drawRect(point, color) {
    ctx.fillStyle = "cyan";
    ctx.strokeStyle = "gray";
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.rect(point.x - 13, point.y - 8, 25, 15);
    ctx.fill();
    ctx.stroke();
}

function drawRect2(point, color) {
    ctx.fillStyle = "yellow";
    ctx.strokeStyle = "gray";
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.rect(point.z - 13, point.j - 8, 25, 15);
    ctx.fill();
    ctx.stroke();
}

// draw tracking dot at xy
function drawDot(point, color) {
    ctx.fillStyle = color;
    ctx.strokeStyle = "black";
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.arc(point.x, point.y, 8, 0, Math.PI * 2, false);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
}

function drawDot2(point, color) {
    ctx.fillStyle = color;
    ctx.strokeStyle = "black";
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.arc(point.z, point.j, 8, 0, Math.PI * 2, false);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
}

// line: percent is 0-1
function getLineXYatPercent(startPt, endPt, percent) {
    var dx = endPt.x - startPt.x;
    var dy = endPt.y - startPt.y;
    var X = startPt.x + dx * percent;
    var Y = startPt.y + dy * percent;
    return ({
        x: X,
        y: Y
    });
}

// quadratic bezier: percent is 0-1
function getQuadraticBezierXYatPercent(startPt, controlPt, endPt, percent) {
    var x = Math.pow(1 - percent, 2) * startPt.x + 2 * (1 - percent) * percent * controlPt.x + Math.pow(percent, 2) * endPt.x;
    var y = Math.pow(1 - percent, 2) * startPt.y + 2 * (1 - percent) * percent * controlPt.y + Math.pow(percent, 2) * endPt.y;
    return ({
        x: x,
        y: y
    });
}

// cubic bezier percent is 0-1
function getCubicBezierXYatPercent(startPt, controlPt1, controlPt2, endPt, percent) {
    var x = CubicN(percent, startPt.x, controlPt1.x, controlPt2.x, endPt.x);
    var y = CubicN(percent, startPt.y, controlPt1.y, controlPt2.y, endPt.y);
    return ({
        x: x,
        y: y
    });
}

// cubic helper formula at percent distance
function CubicN(pct, a, b, c, d) {
    var t2 = pct * pct;
    var t3 = t2 * pct;
    return a + (-a * 3 + pct * (3 * a - a * pct)) * pct + (3 * b + pct * (-6 * b + b * 3 * pct)) * pct + (c * 3 - c * 3 * pct) * t2 + d * t3;
}