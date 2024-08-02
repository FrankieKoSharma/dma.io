let currentkey = '1';
let bgc ;
let gkcount;
let opacity = 255;
let canessauce;
let caneslemonade;
let stretchingW = 50; // Initial width of the image
let stretchingH = 50; // Initial height of the image

function setup() {
    createCanvas(800, 600);
    background(255);
    smooth();
    bgc = color(255);
    gkcount = 20;
    canessauce = loadImage('images/canesbrush2.png');
    caneslemonade = loadImage('images/canesbrush3.png');
    imageMode(CENTER);
    angleMode(DEGREES);
    let stretchingW = random(50, 200);
    let stretchingH = random(50, 200);
}

function draw() {
    // triggering the clear_print function
    if( keyIsPressed) {
    clear_print();
}
// triggering the newkeychoice
if(mouseIsPressed) {
  drawChoice();
}


}


function drawChoice() {
  // the key mapping if statemens that you can change to do anything you want.
  // just make sure each key option has the a stroke or fill and then what type of
  // graphic function


 // key global variable contains whatever key was last pressed
 let currentkey = key;

switch(currentkey) {
case '1':
  console.log("1");  // black line
 // let k = color(0);

  drawline(color(0), mouseX, mouseY, pmouseX, pmouseY);
  break;
case '2':
  console.log("2");  // raising cane's squash and stretch blue brush
  squashcanes(mouseX, mouseY);
  break;
case '3':
  console.log("3");  // raising cane's logo brush
  // drawline(color(0,255,0), mouseX, mouseY, pmouseX, pmouseY);
  raisingcanes(mouseX, mouseY);
  break;
case '4':
  console.log("4");  // fat turquoise line
  drawFatLine(color(0,255,255), mouseX, mouseY, pmouseX, pmouseY);
  break;
case '5':
  console.log("5");  // erase with bg color
  eraser(bgc,mouseX, mouseY,25);
   break;
case '6':
    console.log("6");  // erase with bg color
    steveRanBrush(gkcount, mouseX, mouseY, pmouseX, pmouseY);

    if (gkcount > 255 ) {

        gkcount = 30;
    } else {
        gkcount+=3;
    }


    break;
case '7':
  console.log("7");  // blue line
  drawline(color(14,84,209), mouseX, mouseY, pmouseX, pmouseY);
  break;
case '8':
  console.log("8");  // black line with thickness level of 5 decreases opacity by increments of 5 over time
  fadingLine(color(0), mouseX, mouseY, pmouseX, pmouseY);
  break;
case '9':
  console.log("9");  // black line with thickness level of 5 decreases opacity by increments of 5 over time
  LineUnfade(color(0), mouseX, mouseY, pmouseX, pmouseY);
  break;
case '0':
  console.log("0");  // red line
  drawFatLine(color(255,0,0), mouseX, mouseY, pmouseX, pmouseY);
  break;
// case 'a':
//   console.log("A");  // brush stroke weight is 1px
//   drawAnyLine(mouseX, mouseY, pmouseX, pmouseY, 1)
//   break;
// case 's':
//   console.log("S");  // brush stroke weight is 5px
//   drawAnyLine(mouseX, mouseY, pmouseX, pmouseY, 5)
//   break;
// case 'd':
//   console.log("D");  // brush stroke weight is 10px
//   drawAnyLine(mouseX, mouseY, pmouseX, pmouseY, 10)
//   break;
// case 'f':
//   console.log("F");  // brush stroke weight is 20px
//   drawAnyLine(mouseX, mouseY, pmouseX, pmouseY, 20)
//   break;


default:             // Default executes if the case labels
  console.log("None");   // don't match the switch parameter
  break;
}

switch (key.toLowerCase()) {
  case 'a':
    console.log("A");  // brush stroke weight is 1px
    drawAnyLine(mouseX, mouseY, pmouseX, pmouseY, 1)
    break;
  case 's':
    console.log("S");  // brush stroke weight is 5px
    drawAnyLine(mouseX, mouseY, pmouseX, pmouseY, 5)
    break;
  case 'd':
    console.log("D");  // brush stroke weight is 10px
    drawAnyLine(mouseX, mouseY, pmouseX, pmouseY, 10)
    break;
  case 'f':
    console.log("F");  // brush stroke weight is 20px
    drawAnyLine(mouseX, mouseY, pmouseX, pmouseY, 20)
    break;
  default:
    // Handle other cases or do nothing
}

}

function drawline( k,  lx, ly,  px, py) {
 // strokeWeight(1);
  stroke(k);
  line(lx, ly, px, py);
  console.log(mouseX);
  console.log(pmouseX);
}

function drawFatLine( k,  lx, ly,  px, py) {
  strokeWeight(10);
  stroke(k);
  line(lx, ly, px, py);
}

function drawAnyLine(lx, ly, px, py, lw) {
  strokeWeight(lw);
  line(lx, ly, px, py);
}

function steveRanBrush(kcount, lx, ly,  px, py) {

  strokeWeight(random(1,35));
  stroke(0,0,kcount);
  //image(b,lx,ly, 30,30);
  line(lx, ly, px, py);
}

function fadingLine( k,  lx, ly,  px, py) { // Opacity decreases over time
   strokeWeight(8);
   stroke(gkcount,gkcount,gkcount,opacity);
   line(lx, ly, px, py);

   if (opacity > 0) {
    opacity -= 3; // Opacity decreases over time
   }
}

function LineUnfade( k,  lx, ly,  px, py) { // Opacity increases over time
  strokeWeight(8);
  stroke(gkcount,gkcount,gkcount,opacity);
  line(lx, ly, px, py);

  if (opacity >= 0) {
   opacity += 3; // Opacity increases over time
  }
}

function eraser( k, lx, ly, sz) {
  stroke(k);
  ellipse(lx, ly, sz,sz);
}

function raisingcanes(lx, ly) {
  push();
  let pivis = random(0,360);
  let randomAlpha = floor(random(256));
  tint(255, randomAlpha);
  translate(mouseX,mouseY);
  rotate(pivis);
  image(canessauce, 0, 0, 50, 50);
  pop();
}

function squashcanes(cx, cy) {
  push();
  let randomAlpha = floor(random(256));
  tint(255, randomAlpha);
  translate(mouseX, mouseY);
  
  // Calculate width and height based on cursor position
  // let factorX = map(cx, 0, width, 0.5, 2); // Map cursor x-position to width factor
  // let factorY = map(cy, 0, height, 0.5, 2); // Map cursor y-position to height factor
  let factorX = random(0.5, 2);
  let factorY = random(0.5, 2);
  let stretchedW = stretchingW * factorX; // Calculate stretched width
  let stretchedH = stretchingH * factorY; // Calculate stretched height
  
  image(caneslemonade, 0, 0, stretchedW, stretchedH);
  pop();
}

function mouseMoved() {
  // Update rotation angle based on mouse movement
  pivis = map(mouseX, 0, width, -PI, PI);
}

function clear_print() {

// these 2 options let you choose between clearing the background
// and saveing the current image as a file.
  if (key === 'x' || key === 'X') {
     background(255);
  } else if (key === 'p' || key === 'P') {
    saveFrames('MyDrawing', 'png',  1, 1);
    key = '';  // resets the key so it does not make more than one image.
     //this will save the name as the intials and a random counting number.
     // it will always be larger in value then the last one.
    delay(100);
  }

}



//
// >20
// >>30
// 35
// 30
// 20
// 10
// 30
// 80
// 100
// 120
// 80
