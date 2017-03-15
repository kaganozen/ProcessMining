//http://jsfiddle.net/pm9muubu/

//HTML
<canvas id="canvas" width=1115 height=730></canvas>


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
animate3();


function endP1() {
  ctx.fillStyle = "black";
  ctx.fill();
  ctx.font = "20px Arial";
  ctx.fillText("3", 540, 180);
}

function endP2() {
  ctx.fillStyle = "black";
  ctx.fill();
  ctx.font = "20px Arial";
  ctx.fillText("1", 720, 350);
}

function endP3() {
  ctx.fillStyle = "black";
  ctx.fill();
  ctx.font = "20px Arial";
  ctx.fillText("1", 870, 180);
}

function endP4() {
  ctx.fillStyle = "black";
  ctx.fill();
  ctx.font = "20px Arial";
  ctx.fillText("1", 970, 350);
}

function drawrectP11() {
  ctx.rect(410, 150, 10, 50);
  ctx.lineWidth = 2;
  ctx.fillStyle = "black";
  ctx.fill();
  ctx.strokeStyle = 'black';
  ctx.stroke();
  ctx.font = "20px Arial";
  ctx.fillText("1", 540, 180);
}

function drawrectP12() {
  ctx.rect(590, 320, 10, 50);
  ctx.lineWidth = 2;
  ctx.fillStyle = "black";
  ctx.fill();
  ctx.strokeStyle = 'black';
  ctx.stroke();
  ctx.font = "20px Arial";
  ctx.fillText("1", 720, 350);
}

function drawrectP13() {
  ctx.rect(420, 150, 10, 50);
  ctx.lineWidth = 2;
  ctx.fillStyle = "black";
  ctx.fill();
  ctx.strokeStyle = 'black';
  ctx.stroke();
  ctx.font = "20px Arial";
  ctx.fillText("2", 540, 180);
}

function drawrectP14() {
  ctx.rect(430, 150, 10, 50);
  ctx.lineWidth = 2;
  ctx.fillStyle = "black";
  ctx.fill();
  ctx.strokeStyle = 'black';
  ctx.stroke();
  ctx.font = "20px Arial";
  ctx.fillText("3", 540, 180);
}

function drawrectP15() {
  ctx.rect(340, 320, 10, 50);
  ctx.lineWidth = 2;
  ctx.fillStyle = "black";
  ctx.fill();
  ctx.strokeStyle = 'black';
  ctx.stroke();
  ctx.font = "20px Arial";
  ctx.fillText("1", 470, 350);
}

function drawrectP16() {
  ctx.rect(500, 500, 10, 50);
  ctx.lineWidth = 2;
  ctx.fillStyle = "black";
  ctx.fill();
  ctx.strokeStyle = 'black';
  ctx.stroke();
  ctx.font = "20px Arial";
  ctx.fillText("1", 630, 530);
}

function drawrectP17() {
  ctx.rect(350, 320, 10, 50);
  ctx.lineWidth = 2;
  ctx.fillStyle = "black";
  ctx.fill();
  ctx.strokeStyle = 'black';
  ctx.stroke();
  ctx.font = "20px Arial";
  ctx.fillText("2", 470, 350);
}

function drawrectP21() {
  ctx.rect(740, 150, 10, 50);
  ctx.lineWidth = 2;
  ctx.fillStyle = "black";
  ctx.fill();
  ctx.strokeStyle = 'black';
  ctx.stroke();
  ctx.font = "20px Arial";
  ctx.fillText("1", 870, 180);
}

function drawrectP22() {
  ctx.rect(840, 320, 10, 50);
  ctx.lineWidth = 2;
  ctx.fillStyle = "black";
  ctx.fill();
  ctx.strokeStyle = 'black';
  ctx.stroke();
  ctx.font = "20px Arial";
  ctx.fillText("1", 970, 350);
}

function drawrectP23() {
  ctx.rect(510, 500, 10, 50);
  ctx.lineWidth = 2;
  ctx.fillStyle = "black";
  ctx.fill();
  ctx.strokeStyle = 'black';
  ctx.stroke();
  ctx.font = "20px Arial";
  ctx.fillText("1", 615, 530);
}

function drawrectP31() {
  ctx.rect(100, 100, 10, 50);
  ctx.lineWidth = 2;
  ctx.fillStyle = "black";
  ctx.fill();
  ctx.strokeStyle = 'black';
  ctx.stroke();
  ctx.font = "20px Arial";
  ctx.fillText("1", 230, 130);
}


function animate() {
  // set the animation position (0-100)
  percent += direction;
  if (percent < 0) {
    percent = 0;
    direction = 1;
  };
  if (percent > 200) {
    percent = 200;
  };

  draw(percent);

  // request another frame
  setTimeout(function() {
    requestAnimationFrame(animate);
  }, 4000 / fps);
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
  setTimeout(function() {
    requestAnimationFrame(animate2);
  }, 4000 / fps);
}

function animate3() {
  // set the animation position (0-100)
  percent += direction;
  if (percent < 0) {
    percent = 0;
    direction = 1;
  };
  if (percent > 200) {
    percent = 200;
  };

  draw3(percent);

  // request another frame
  setTimeout(function() {
    requestAnimationFrame(animate3);
  }, 4000 / fps);
}



function startarc() {
  ctx.beginPath();
  ctx.arc(640, 35, 10, 0, 2 * Math.PI);
  ctx.lineWidth = 2;
  ctx.fillStyle = "lightgreen";
  ctx.fill();
  ctx.strokeStyle = 'black';
  ctx.stroke();
}

function endarc() {
  ctx.beginPath();
  ctx.arc(120, 650, 10, 0, 2 * Math.PI);
  ctx.lineWidth = 2;
  ctx.fillStyle = "red";
  ctx.fill();
  ctx.strokeStyle = 'black';
  ctx.stroke();
}

function drawarc() {
  ctx.arc(700, 75, 20, 0, 2 * Math.PI);
  ctx.stroke();
}

function drawrect() {
  ctx.rect(210, 20, 150, 50);
  ctx.lineWidth = 2;
  ctx.strokeStyle = 'black';
  ctx.stroke();

}

function drawrect1() {
  ctx.rect(410, 150, 150, 50);
  ctx.lineWidth = 2;
  ctx.strokeStyle = 'black';
  ctx.stroke();

}

function drawrect2() {
  ctx.rect(740, 150, 150, 50);
  ctx.lineWidth = 2;
  ctx.strokeStyle = 'black';
  ctx.stroke();

}

function drawrect3() {
  ctx.rect(340, 320, 150, 50);
  ctx.lineWidth = 2;
  ctx.strokeStyle = 'black';
  ctx.stroke();

}

function drawrect4() {
  ctx.rect(590, 320, 150, 50);
  ctx.lineWidth = 2;
  ctx.strokeStyle = 'black';
  ctx.stroke();

}

function drawrect5() {
  ctx.rect(840, 320, 150, 50);
  ctx.lineWidth = 2;
  ctx.strokeStyle = 'black';
  ctx.stroke();

}

function drawrect6() {
  ctx.rect(500, 500, 150, 50);
  ctx.lineWidth = 2;
  ctx.strokeStyle = 'black';
  ctx.stroke();

}

function drawrect7() {
  ctx.rect(100, 100, 150, 50);
  ctx.lineWidth = 2;
  ctx.strokeStyle = 'black';
  ctx.stroke();

}

// draw the current frame based on sliderValue
function draw(sliderValue) {
  // redraw path
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.lineWidth = 5;

  //1.1
  ctx.beginPath();
  ctx.moveTo(630, 40);
  ctx.lineTo(480, 150);
  ctx.strokeStyle = 'lightgray';
  ctx.stroke();

  //1.2
  ctx.beginPath();
  ctx.moveTo(650, 40);
  ctx.lineTo(820, 150);
  ctx.strokeStyle = 'lightgray';
  ctx.stroke();

  //2.1
  ctx.beginPath();
  ctx.moveTo(410, 190);
  ctx.quadraticCurveTo(250, 250, 350, 320);
  ctx.strokeStyle = 'black';
  ctx.stroke();

  //2.2
  ctx.beginPath();
  ctx.moveTo(590, 330);
  ctx.quadraticCurveTo(450, 300, 470, 200);
  ctx.strokeStyle = 'black';
  ctx.stroke();

  //2.3
  ctx.beginPath();
  ctx.moveTo(520, 200);
  ctx.quadraticCurveTo(625, 250, 630, 320);
  ctx.strokeStyle = 'black';
  ctx.stroke();

  //2.4
  ctx.beginPath();
  ctx.moveTo(780, 200);
  ctx.quadraticCurveTo(700, 250, 680, 320);
  ctx.strokeStyle = 'black';
  ctx.stroke();

  //2.5
  ctx.beginPath();
  ctx.moveTo(890, 190);
  ctx.quadraticCurveTo(1055, 250, 970, 320);
  ctx.strokeStyle = 'black';
  ctx.stroke();

  //5.1
  ctx.beginPath();
  ctx.moveTo(560, 155);
  ctx.bezierCurveTo(750, 120, 700, 220, 560, 180);
  ctx.strokeStyle = 'black';
  ctx.stroke();

  //3.1
  ctx.beginPath();
  ctx.moveTo(380, 370);
  ctx.quadraticCurveTo(300, 450, 500, 510);
  ctx.strokeStyle = 'black';
  ctx.stroke();

  //3.2
  ctx.beginPath();
  ctx.moveTo(540, 500);
  ctx.quadraticCurveTo(550, 400, 450, 370);
  ctx.strokeStyle = 'black';
  ctx.stroke();

  //6.1
  ctx.beginPath();
  ctx.moveTo(410, 170);
  ctx.quadraticCurveTo(150, 150, 120, 650);
  ctx.strokeStyle = 'lightgray';
  ctx.stroke();

  //6.2
  ctx.beginPath();
  ctx.moveTo(340, 360);
  ctx.quadraticCurveTo(250, 400, 120, 650);
  ctx.strokeStyle = 'lightgray';
  ctx.stroke();

  //6.3
  ctx.beginPath();
  ctx.moveTo(540, 550);
  ctx.quadraticCurveTo(400, 650, 120, 650);
  ctx.strokeStyle = 'lightgray';
  ctx.stroke();

  //6.4
  ctx.beginPath();
  ctx.moveTo(940, 370);
  ctx.quadraticCurveTo(800, 750, 120, 650);
  ctx.strokeStyle = 'lightgray';
  ctx.stroke();
  
  //7.1
  ctx.beginPath();
  ctx.moveTo(630, 30);
  ctx.quadraticCurveTo(400, 50, 250, 100);
  ctx.strokeStyle = 'lightgray';
  ctx.stroke();
  
  //7.2
  ctx.beginPath();
  ctx.moveTo(150, 150);
  ctx.quadraticCurveTo(50, 300, 120, 650);
  ctx.strokeStyle = 'lightgray';
  ctx.stroke();

  //3.3
  ctx.beginPath();
  ctx.moveTo(900, 370);
  ctx.quadraticCurveTo(800, 450, 650, 510);
  ctx.strokeStyle = 'black';
  ctx.stroke();


  drawrect1();
  drawrect2();
  drawrect3();
  drawrect4();
  drawrect5();
  drawrect6();
  drawrect7();
  startarc();
  endarc();

  // draw the tracking rectangle
  var xy;

  //1.1
  if (sliderValue < 25) {
    var percent = sliderValue / 24;
    xy = getLineXYatPercent({
      x: 630,
      y: 40
    }, {
      x: 480,
      y: 150
    }, percent);
  }

  //2.3
  else if (sliderValue < 50) {
    drawrectP11();
    var percent = (sliderValue - 25) / 24
    xy = getQuadraticBezierXYatPercent({
      x: 520,
      y: 200
    }, {
      x: 625,
      y: 250
    }, {
      x: 630,
      y: 320
    }, percent);
  }

  //2.2
  else if (sliderValue < 75) {
    drawrectP12();
    var percent = (sliderValue - 50) / 24
    xy = getQuadraticBezierXYatPercent({
      x: 590,
      y: 330
    }, {
      x: 450,
      y: 300
    }, {
      x: 470,
      y: 200
    }, percent);
  }

  //5.1
  else if (sliderValue < 100) {
    drawrectP13();
    var percent = (sliderValue - 75) / 24
    xy = getCubicBezierXYatPercent({
      x: 560,
      y: 155
    }, {
      x: 750,
      y: 120
    }, {
      x: 700,
      y: 220
    }, {
      x: 560,
      y: 180
    }, percent);
  }

  //2.1
  else if (sliderValue < 125) {
    drawrectP14();
    var percent = (sliderValue - 100) / 24
    xy = getQuadraticBezierXYatPercent({
      x: 410,
      y: 190
    }, {
      x: 250,
      y: 250
    }, {
      x: 350,
      y: 320
    }, percent);
  }

  //3.1
  else if (sliderValue < 150) {
    drawrectP15();
    var percent = (sliderValue - 125) / 24
    xy = getQuadraticBezierXYatPercent({
      x: 380,
      y: 370
    }, {
      x: 300,
      y: 450
    }, {
      x: 500,
      y: 510
    }, percent);
  }

  //3.2
  else if (sliderValue < 175) {
    drawrectP16();
    var percent = (sliderValue - 150) / 24
    xy = getQuadraticBezierXYatPercent({
      x: 540,
      y: 500
    }, {
      x: 550,
      y: 400
    }, {
      x: 450,
      y: 370
    }, percent);
  }
  //6.2 END
  else {
    drawrectP17();
    endP1();
    endP2();
    endP3();
    endP4();
    var percent = (sliderValue - 175) / 25
    xy = getQuadraticBezierXYatPercent({
      x: 340,
      y: 360
    }, {
      x: 250,
      y: 400
    }, {
      x: 120,
      y: 650
    }, percent);
  }

  drawRect(xy, "red");
}

function draw2(sliderValue) {

  var zj;

  //PAHT 1.2
  if (sliderValue < 50) {
    var percent = sliderValue / 49;
    zj = getLineXYatPercent2({
      z: 650,
      j: 40
    }, {
      z: 820,
      j: 150
    }, percent);
  }
  //PAHT 2.5
  else if (sliderValue < 100) {
    drawrectP21();
    var percent = (sliderValue - 50) / 49
    zj = getQuadraticBezierXYatPercent2({
      z: 890,
      j: 190
    }, {
      z: 1055,
      j: 250
    }, {
      z: 970,
      j: 320
    }, percent);
  }
  //PAHT 3.3
  else if (sliderValue < 150) {
    drawrectP22();
    var percent = (sliderValue - 100) / 49
    zj = getQuadraticBezierXYatPercent2({
      z: 900,
      j: 370
    }, {
      z: 800,
      j: 450
    }, {
      z: 650,
      j: 510
    }, percent);
  }
  //PAHT 6.3 END
  else {
    drawrectP23();
    var percent = (sliderValue - 150) / 50
    zj = getQuadraticBezierXYatPercent2({
      z: 540,
      j: 550
    }, {
      z: 400,
      j: 650
    }, {
      z: 120,
      j: 650
    }, percent);
  }
  drawRect2(zj, "black");

}

function draw3(sliderValue) {

  var wq;

  if (sliderValue < 100) {
    var percent = sliderValue / 99;
     wq = getQuadraticBezierXYatPercent3({
      w: 630,
      q: 30
    }, {
      w: 400,
      q: 50
    }, {
      w: 250,
      q: 100
    }, percent);
  }
  
   else   {
   drawrectP31();
   var percent = (sliderValue - 100) / 100
     wq = getQuadraticBezierXYatPercent3({
      w: 150,
      q: 150
    }, {
      w: 50,
      q: 300
    }, {
      w: 120,
      q: 650
    }, percent);
    
  }

drawRect3(wq, "black");
}

// draw tracking rect at xy
function drawRect(point, color) {
  ctx.fillStyle = "black";
  ctx.strokeStyle = "gray";
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.rect(point.x - 13, point.y - 8, 25, 15);
  ctx.fill();
  ctx.stroke();
}

function drawRect2(point, color) {
  ctx.fillStyle = "black";
  ctx.strokeStyle = "gray";
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.rect(point.z - 13, point.j - 8, 25, 15);
  ctx.fill();
  ctx.stroke();
}

function drawRect3(point, color) {
  ctx.fillStyle = "black";
  ctx.strokeStyle = "gray";
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.rect(point.w - 13, point.q - 8, 25, 15);
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

function drawDot3(point, color) {
  ctx.fillStyle = color;
  ctx.strokeStyle = "black";
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.arc(point.w, point.q, 8, 0, Math.PI * 2, false);
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

function getLineXYatPercent2(startPt, endPt, percent) {
  var dz = endPt.z - startPt.z;
  var dj = endPt.j - startPt.j;
  var Z = startPt.z + dz * percent;
  var J = startPt.j + dj * percent;
  return ({
    z: Z,
    j: J
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

function getQuadraticBezierXYatPercent2(startPt, controlPt, endPt, percent) {
  var z = Math.pow(1 - percent, 2) * startPt.z + 2 * (1 - percent) * percent * controlPt.z + Math.pow(percent, 2) * endPt.z;
  var j = Math.pow(1 - percent, 2) * startPt.j + 2 * (1 - percent) * percent * controlPt.j + Math.pow(percent, 2) * endPt.j;
  return ({
    z: z,
    j: j
  });
}

function getQuadraticBezierXYatPercent3(startPt, controlPt, endPt, percent) {
  var w = Math.pow(1 - percent, 2) * startPt.w + 2 * (1 - percent) * percent * controlPt.w + Math.pow(percent, 2) * endPt.w;
  var q = Math.pow(1 - percent, 2) * startPt.q + 2 * (1 - percent) * percent * controlPt.q + Math.pow(percent, 2) * endPt.q;
  return ({
    w: w,
    q: q
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
