//http://jsfiddle.net/xmv16L7k/

//HTML
<canvas id="canvas" width=1115 height=730></canvas>
<button onclick="animate()">Click me</button>

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
var percentN = 200;
var percentNN = 100;
var percentN2 = 300;
var direction = 1;

// start the animation
animate();
animate2();
animate3();
animate4();
animate5();


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
  ctx.fillText("2", 870, 180);
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
  ctx.fillText("", 540, 180);
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

function drawrectP211() {
  ctx.rect(750, 150, 10, 50);
  ctx.lineWidth = 2;
  ctx.fillStyle = "black";
  ctx.fill();
  ctx.strokeStyle = 'black';
  ctx.stroke();
  ctx.font = "20px Arial";
  ctx.fillText("2", 870, 180);
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

function drawrectP221() {
  ctx.rect(850, 320, 10, 50);
  ctx.lineWidth = 2;
  ctx.fillStyle = "black";
  ctx.fill();
  ctx.strokeStyle = 'black';
  ctx.stroke();
  ctx.font = "20px Arial";
  ctx.fillText("2", 970, 350);
}

function drawrectP23() {
  ctx.rect(510, 500, 10, 50);
  ctx.lineWidth = 2;
  ctx.fillStyle = "black";
  ctx.fill();
  ctx.strokeStyle = 'black';
  ctx.stroke();
  ctx.font = "20px Arial";
  ctx.fillText("2", 615, 530);
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

function drawrectP41() {
  ctx.rect(440, 150, 10, 50);
  ctx.lineWidth = 2;
  ctx.fillStyle = "black";
  ctx.fill();
  ctx.strokeStyle = 'black';
  ctx.stroke();
  ctx.font = "20px Arial";
  ctx.fillText("4", 540, 180);
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
  }, 5000 / fps);
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
  }, 5000 / fps);
}

function animate3() {
  // set the animation position (0-100)
  percentNN += direction;
  if (percentNN < 100) {
    percentNN = 100;
    direction = 1;
  };
  if (percentNN > 300) {
    percentNN = 300;
  };

  draw3(percentNN);

  // request another frame
  setTimeout(function() {
    requestAnimationFrame(animate3);
  }, 5000 / fps);
}

function animate4() {
  // set the animation position (0-100)
  percent += direction;
  if (percent < 0) {
    percent = 0;
    direction = 1;
  };
  if (percent > 200) {
    percent = 200;
  };

  draw4(percent);

  // request another frame
  setTimeout(function() {
    requestAnimationFrame(animate4);
  }, 5000 / fps);
}


function animate5() {
  // set the animation position (0-100)
  percentN += direction;
  if (percentN < 200) {
    percentN = 200;
    direction = 1;
  };
  if (percentN > 400) {
    percentN = 400;
  };

  draw5(percentN);

  // request another frame
  setTimeout(function() {
    requestAnimationFrame(animate5);
  }, 5000 / fps);
}

function animate6() {
  // set the animation position (0-100)
  percentN2 += direction;
  if (percentN2 < 300) {
    percentN2 = 300;
    direction = 1;
  };
  if (percentN2 > 700) {
    percentN2 = 700;
  };

  draw6(percentN2);

  // request another frame
  setTimeout(function() {
    requestAnimationFrame(animate6);
  }, 40000 / fps);
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

    endP2();
    
   
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

    /////////////////

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
  var ab;

  if (sliderValue < 200) {
    var percent = (sliderValue - 100) / 99;
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
  } else {
    drawrectP31();
    var percent = (sliderValue - 200) / 100
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

function draw4(sliderValue) {
  var ab;

  if (sliderValue < 100) {
    var percent = sliderValue / 99;
    ab = getLineXYatPercent3({
      a: 630,
      b: 40
    }, {
      a: 480,
      b: 150
    }, percent);
  } else {
    drawrectP41();
    var percent = (sliderValue - 100) / 100
    ab = getQuadraticBezierXYatPercent4({
      a: 410,
      b: 170
    }, {
      a: 150,
      b: 150
    }, {
      a: 120,
      b: 650
    }, percent);
  }

  drawRect4(ab, "black");
}

function draw5(sliderValue) {
  var ef;

  if (sliderValue < 250) {
    var percent = (sliderValue - 200) / 49;
    ef = getLineXYatPercent4({
      e: 650,
      f: 40
    }, {
      e: 730,
      f: 90
    }, percent);
    }
    else if (sliderValue < 300) {
    var percent = (sliderValue - 250) / 49;
    ef = getLineXYatPercent4({
      e: 730,
      f: 90
    }, {
      e: 820,
      f: 150
    }, percent);
  }
  else if (sliderValue < 350) {
  drawrectP211();
    var percent = (sliderValue - 300) / 49
    ef = getQuadraticBezierXYatPercent5({
      e: 890,
      f: 190
    }, {
      e: 1055,
      f: 250
    }, {
      e: 970,
      f: 320
    }, percent);
  } else   {
  endP3();
  drawrectP221();
  animate6();
    var percent = (sliderValue - 350) / 50
    ef = getQuadraticBezierXYatPercent5({
      e: 940,
      f: 370
    }, {
      e: 800,
      f: 750
    }, {
      e: 120,
      f: 650
    }, percent);
  }

  drawRect5(ef, "black");

}

/////////6////////////
function draw6(sliderValue) {
  var gh;

  if (sliderValue < 400 ) {
    var percent = (sliderValue - 300) / 99;
    gh = getLineXYatPercent5({
      g: 650,
      h: 40
    }, {
      g: 820,
      h: 150
    }, percent);
  }  else if (sliderValue < 500) {
    var percent = (sliderValue - 400) / 99
    gh = getQuadraticBezierXYatPercent6({
      g: 780,
      h: 200
    }, {
      g: 700,
      h: 250
    }, {
      g: 680,
      h: 320
    }, percent);
  } else if (sliderValue < 600 ) {
    var percent = (sliderValue - 500) / 99
    gh = getQuadraticBezierXYatPercent6({
      g: 590,
      h: 330
    }, {
      g: 450,
      h: 300
    }, {
      g: 470,
      h: 200
    }, percent);
  } else  {
    var percent = (sliderValue - 600) / 100
    gh = getQuadraticBezierXYatPercent6({
      g: 410,
      h: 170
    }, {
      g: 150,
      h: 150
    }, {
      g: 120,
      h: 650
    }, percent);
  }

  drawRect6(gh, "black");

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

function drawRect4(point, color) {
  ctx.fillStyle = "black";
  ctx.strokeStyle = "gray";
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.rect(point.a - 13, point.b - 8, 25, 15);
  ctx.fill();
  ctx.stroke();
}

function drawRect5(point, color) {
  ctx.fillStyle = "black";
  ctx.strokeStyle = "gray";
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.rect(point.e - 13, point.f - 8, 25, 15);
  ctx.fill();
  ctx.stroke();
}

function drawRect6(point, color) {
  ctx.fillStyle = "black";
  ctx.strokeStyle = "gray";
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.rect(point.g - 13, point.h - 8, 25, 15);
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

function drawDot4(point, color) {
  ctx.fillStyle = color;
  ctx.strokeStyle = "black";
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.arc(point.a, point.b, 8, 0, Math.PI * 2, false);
  ctx.closePath();
  ctx.fill();
  ctx.stroke();
}

function drawDot5(point, color) {
  ctx.fillStyle = color;
  ctx.strokeStyle = "black";
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.arc(point.e, point.f, 8, 0, Math.PI * 2, false);
  ctx.closePath();
  ctx.fill();
  ctx.stroke();
}

function drawDot6(point, color) {
  ctx.fillStyle = color;
  ctx.strokeStyle = "black";
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.arc(point.g, point.h, 8, 0, Math.PI * 2, false);
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

function getLineXYatPercent3(startPt, endPt, percent) {
  var da = endPt.a - startPt.a;
  var db = endPt.b - startPt.b;
  var A = startPt.a + da * percent;
  var B = startPt.b + db * percent;
  return ({
    a: A,
    b: B
  });
}

function getLineXYatPercent4(startPt, endPt, percent) {
  var de = endPt.e - startPt.e;
  var df = endPt.f - startPt.f;
  var E = startPt.e + de * percent;
  var F = startPt.f + df * percent;
  return ({
    e: E,
    f: F
  });
}

function getLineXYatPercent5(startPt, endPt, percent) {
  var dg = endPt.g - startPt.g;
  var dh = endPt.h - startPt.h;
  var G = startPt.g + dg * percent;
  var H = startPt.h + dh * percent;
  return ({
    g: G,
    h: H
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

function getQuadraticBezierXYatPercent4(startPt, controlPt, endPt, percent) {
  var a = Math.pow(1 - percent, 2) * startPt.a + 2 * (1 - percent) * percent * controlPt.a + Math.pow(percent, 2) * endPt.a;
  var b = Math.pow(1 - percent, 2) * startPt.b + 2 * (1 - percent) * percent * controlPt.b + Math.pow(percent, 2) * endPt.b;
  return ({
    a: a,
    b: b
  });
}

function getQuadraticBezierXYatPercent5(startPt, controlPt, endPt, percent) {
  var e = Math.pow(1 - percent, 2) * startPt.e + 2 * (1 - percent) * percent * controlPt.e + Math.pow(percent, 2) * endPt.e;
  var f = Math.pow(1 - percent, 2) * startPt.f + 2 * (1 - percent) * percent * controlPt.f + Math.pow(percent, 2) * endPt.f;
  return ({
    e: e,
    f: f
  });
}

function getQuadraticBezierXYatPercent6(startPt, controlPt, endPt, percent) {
  var g = Math.pow(1 - percent, 2) * startPt.g + 2 * (1 - percent) * percent * controlPt.g + Math.pow(percent, 2) * endPt.g;
  var h = Math.pow(1 - percent, 2) * startPt.h + 2 * (1 - percent) * percent * controlPt.h + Math.pow(percent, 2) * endPt.h;
  return ({
    g: g,
    h: h
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
