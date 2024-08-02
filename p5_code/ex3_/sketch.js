let speedX, speedY, loX, loY;
let speedX2, speedY2, loX2, loY2;

function setup() {
  createCanvas(800,500);
  background(0,0,255);
  speedX = random(-5, 5);
  speedY = random(-5, 5);
  loX = height / 2;
  loY = width / 2;
  speedX2 = random(-10, 10);
  speedY2 = random(-10, 10);
  loX2 = height / 4;
  loY2 = width / 4;
  angleMode(DEGREES);
}

function draw() {
  background(0,0,255);
  if (loX < 0) {
      speedX = -speedX;
  }
  if (loX > width) {
      speedX = -speedX;
  }
  // this is the short hand way of doing the same as the 2 'ifs' above
  // this uses or '||'
  if ((loY < 0) || (loY > height)) {
      speedY = -speedY;
  }

  // update the position of the ball and print to screen
  loX += speedX;
  loY += speedY;

  if (loX2 < -200) {
      speedX2 = -speedX2;
  }
  if (loX2 > width - 120) {
      speedX2 = -speedX2;
  }
  // this is the short hand way of doing the same as the 2 'ifs' above
  // this uses or '||'
  if ((loY2 < -120) || (loY2 > height + 120)) {
      speedY2 = -speedY2;
  }

  // update the position of the ball and print to screen
  loX2 += speedX2;
  loY2 += speedY2;

  // Define gradient colors
  let c1 = color(0, 0, 255); // Blue
  let c2 = color(0, 0, 105); // Navy Blue

  // Draw the gradient background, set to y-axis
  setGradient(0, 0, width, height, c1, c2, "y-axis");
  
  rabbit2(loX2,loY2,0.8,330); // When I rotated my character, its speedX/Y boundaries move too, no longer syncing with the main canvas board.
  rabbit(loX,loY);
}

// Comment: I think I am actually getting better at understanding functions than I do at Exercise 1.

// Play around w/ different sizes
// 

function rabbit(lx,ly) {
  head(lx+150,ly+100,255,60,60);
  body(lx+90,ly+170,255,120);
  
  push();
  translate(lx+80,ly+30);
  rotate(-45);
  bunnyears(0,0,255,40,120);
  pop();

  eyes(lx+165,ly+90,0);
  tail(lx+10,ly+120,255);
}

function rabbit2(lx,ly,w,r) {
  push();
  scale(w);
  rotate(r);

  push();
  translate(lx+140,ly+110);
  rotate(45);
  connectthebody(0,0,color(222, 157, 122));
  pop();

  tail(lx+20,ly+130,color(222, 157, 122));
  head(lx+155,ly+100,color(222, 157, 122),50,60);
  body(lx+90,ly+170,color(222, 157, 122),150);
  
  push();
  translate(lx+80,ly+30);
  rotate(-45);
  bunnyears(0,0,color(222, 157, 122),40,120);
  pop();

  push();
  translate(lx+150,ly+10);
  rotate(-20);
  bunnyears(0,0,color(222, 157, 122),35,100);
  pop();

  eyes2(lx+165,ly+90,0);

  // Couldn't get the stroke thing to fill the entire shape
  push();
  translate(lx+50,ly+240);
  rotate(180);
  feet(0,0,color(222, 157, 122));
  feet(-70,0,color(222, 157, 122));
  pop();

  nose(lx+180,ly+110);

  push();
  translate(lx+165,ly+102);
  rotate(30);
  mouth(0,0);
  pop();

  pop();
}

function eyes(lx,ly,c) {
  noStroke();
  fill(c);
  ellipse(lx, ly, 10, 10);
}

function eyes2(lx,ly,c) {
  noStroke();
  fill(255);
  ellipse(lx, ly, 20, 30);
  fill(c);
  ellipse(lx+10, ly, 10, 10);
}

function nose(lx,ly) {
  stroke(0);
  fill(255, 196, 245);
  ellipse(lx, ly, 20, 10);
}

function mouth(lx, ly) {
  noFill();
  stroke(0);
  arc(lx, ly, 40, 40, 40, 120);
}

function bunnyears(lx, ly, c, wi, hi) {
  stroke(0);
  fill(c);
  ellipse(lx, ly, wi, hi);
}

function head(lx, ly, c, wi, hi) {
  noStroke();
  fill(c);
  ellipse(lx, ly, wi, hi);
}

function body(lx, ly, c, wi) {
  stroke(0);
  fill(c);
  ellipse(lx, ly, wi, 90);
}

function tail(lx, ly, c) {
  stroke(0);
  fill(c);
  ellipse(lx, ly, 50, 50);
}

function feet(lx, ly, c) {
  stroke(0);
  fill(c);
  arc(lx, ly, 40, 40, 0, 180);
}

function connectthebody(lx, ly, c) {
  noStroke();
  fill(c);
  rect(lx, ly, 30, 50);
}

// Creates the function to create your gradient
function setGradient(x, y, w, h, c1, c2, axis) {
  noFill();

  // Depending on the axis, create a vertical or horizontal gradient
  if (axis === "y-axis") {
    // Top to bottom gradient
    for (let i = y; i <= y + h; i++) {
      let inter = map(i, y, y + h, 0, 1);
      let c = lerpColor(c1, c2, inter);
      stroke(c);
      line(x, i, x + w, i);
    }
  } else if (axis === "x-axis") {
    // Left to right gradient
    for (let i = x; i <= x + w; i++) {
      let inter = map(i, x, x + w, 0, 1);
      let c = lerpColor(c1, c2, inter);
      stroke(c);
      line(i, y, i, y + h);
    }
  }
}