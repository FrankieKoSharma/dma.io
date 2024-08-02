// 1. Array Setup

let rabbitAtnd = 50; // number of rabbits to be present on screen
let rabbit_fks = []; // Array of Frank's pet rabbits infesting the screen.

function setup() {
  createCanvas(700,700);

  for (let i=0; i < rabbitAtnd; i++) {
    loX = width/2;
    loY = height/2;
    size = random(0.2, 1.5);
    rot = random(-45, 45);
    speedX = random(-10, 10);
    speedY = random(-10, 10);
    cirSize = random(10, 50);
    rgb = color(random(255), random(255), random(255));
    rabbit_fks[i] = new Rabbit(rgb, width/2, height/2, rot, size, speedX, speedY, 0);
  }

  let col = color(random(50,200),random(50,200),random(50,200));
  angleMode(DEGREES);
  rectMode(CENTER);

  // Create a rabbit!
  // rabbit_fks = new Rabbit(col,width/2,height/2,0,1.3);
}

function draw() {
  // Define gradient colors
  let c1 = color(255, 255, 0); // Yellow
  let c2 = color(100, 255, 0); // Lime Green

  // Draw the gradient background, set to y-axis
  setGradient(0, 0, width, height, c1, c2, "y-axis");

  stroke(0);

  for (let i = 0; i < rabbit_fks.length; i++) {
    rabbit_fks[i].display();
    rabbit_fks[i].update();

    // Boundaries of the infestation
    if (rabbit_fks[i].posx < 40 + rabbit_fks[i].cirSize / 2 || rabbit_fks[i].posx > (width - 40) - rabbit_fks[i].cirSize / 2) {
      rabbit_fks[i].sx = -rabbit_fks[i].sx;
    }
    if (rabbit_fks[i].posy < 40 + rabbit_fks[i].cirSize / 2 || rabbit_fks[i].posy > (height - 40) - rabbit_fks[i].cirSize / 2) {
      rabbit_fks[i].sy = -rabbit_fks[i].sy;
    }

    // Behavior is controlled when holding the left mouse
    if (mouseIsPressed && mouseX >= 0 && mouseX <= width && mouseY >= 0 && mouseY <= height) {
      rabbit_fks[i].posx = mouseX - random(30,90);
      rabbit_fks[i].posy = mouseY - random(30,90);
    }
  } // end of loop
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

// Create an evil rabbit object once the B is pressed
function keyPressed() {
  if (key === 'B' || key === 'b') { // B is pressed
    let redColor = color(255, 0, 0); // Makes the new rabbit object red
    let angryeyes = color(255, 255, 0); // 
    let posX = random(width); // Random X position
    let posY = random(height); // Random Y position
    let rotation = random(-320, 320); // Random rotation
    let scale = random(0.2, 1.5); // Random scale
    let speedX = random(30, 70); // Random X speed
    let speedY = random(30, 70); // Random Y speed
    let cirSize = random(10, 50); // Random circle size
    rabbit_fks.push(new Rabbit(redColor, posX, posY, rotation, scale, speedX, speedY, angryeyes)); // Add new red Rabbit object to the array
  }
}

// Beginning of Rabbit Class
class Rabbit {
  // Start with class variables. They are unique to each instance of a class.
    k;
    posx;
    posy;
    rot;
    sc;
    sx;
    sy;
    ic;

  // The Constructor is like setup and helps defines the details of the object
  constructor(lk, dragX, dragY, lrot, lsc, lsx, lsy, lic) {
    // Argument variables are dragX and dragY
    this.k = lk;
    this.posx = dragX;
    this.posy = dragY;
    this.rot = lrot;
    this.sc = lsc;
    this.ic = lic;

    this.sx = lsx;
    this.sy = lsy;
    
  }

  // functions inside of Classes are called methods
  // This one is designed to go in the draw loop and called repeatly
  // Beginning of Display Function
   display() {
    push();
    translate(this.posx,this.posy);
    rotate(this.rot); // Applying rotation
    scale(this.sc); // Applying scale
    fill(this.k);
    this.head(150, 100, this.k, 60, 60);
    this.body(90, 170, this.k, 120);

    push();
    translate(80, 30);
    rotate(-45);
    this.bunnyears(0, 0, this.k, 40, 120);
    pop();

    this.eyes(165, 90, 0);
    this.tail(10, 120, this.k);
    pop();

    // fill(this.draw);
    // ellipse(this.posx+150,this.posy+100,255,60,60);
    // ellipse(this.posx+90,this.posy+170,255,120);
    
    // push();
    // translate(this.posx+80,this.posy+30);
    // rotate(-45);
    // ellipse(0,0,255,40,120);
    // pop();
  
    // ellipse(this.posx+165,this.posy+90,0);
    // ellipse(this.posx+10,this.posy+120,255);

  } // End of display method

  update() {
    // Update position
    this.posx+=this.sx;
    this.posy+=this.sy;

    // Rabbit boundaries
    if (this.posx < 0) {
        this.sx *= -1;
    }
    if (this.posx > width) {
        this.sx *= -1;
    }
    if (this.posy < 0) {
        this.sy *= -1;
    }
    if (this.posy > height) {
        this.sy *= -1;
    }
    

  }

  rabbithop() {
    this.posx += random(-20,20);
    this.posy+= random(-20,20);
    this.rot = random(-320,320);
    this.sc = random(.5,2);
    this.sx = random(-5,5);
    this.sy = random(-5,5);
    this.k = color(random(50, 200),random(50, 200),random(50, 200));
   }

  head(lx, ly, c, wi, hi) {
    noStroke();
    fill(c);
    ellipse(lx, ly, wi, hi);
  }

  body(lx, ly, c, wi) {
    stroke(0);
    fill(c);
    ellipse(lx, ly, wi, 90);
  }

  bunnyears(lx, ly, c, wi, hi) {
    stroke(0);
    fill(c);
    ellipse(lx, ly, wi, hi);
  }

  eyes(lx, ly, c) {
    noStroke();
    fill(this.ic);
    ellipse(lx, ly, 10, 10);
  }

  tail(lx, ly, c) {
    stroke(0);
    fill(c);
    ellipse(lx, ly, 50, 50);
  }
} //// End of Rabbit Class