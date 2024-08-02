let innout = 0;
let canes = 0;
let cx,cy;
let size;
let khazi = false;
let im1, im2, im3, im4, im5, im6, im7;
let currentImg;
let consoleImgTxt;
let turboyellow, turbogreen;
let turboyy, turbogx;
let horColor, verColor;
let colorTogg = false;

function preload() {
  // Fonts and images get loaded onto the canvas
    font1 = loadFont("assets/ruda.ttf");
    font2 = loadFont("assets/georgia.ttf");
    im1 = loadImage("images/In N Out.png");
    im2 = loadImage("images/Taco Bell.png"); 
    im3 = loadImage("images/Raising Canes.png");
    im4 = loadImage("images/Chick fil A.png");
    im5 = loadImage("images/Carls Jr.png"); 
    im6 = loadImage("images/Pizza Hut.png");
    im7 = loadImage("images/Dutch Bros.png");
}

function setup() {
    createCanvas(600, 600); // canvas size
    background(230); // background color
    noStroke();
    
    cx = width/2;
    cy = height/2;
    size = 40;

    turboyellow = height - random(50);
    turbogreen = width - random(50);
    turboyy = 0;
    turbogx = 0;
    horColor = 'rgba(120,255,0,0.5)';
    verColor = 'rgba(255,200,10,0.5)';
}

function draw() {
    // Yellow and green lace pattern starts to fill the screen
    // width/height - random(length) represents how much of the rectangular lines take up the screen.
    // rect(x, y, width, height);
    fill(horColor); // horizontal green rectangle lace
    rect(turbogx, canes, turbogreen, 10);
    fill(verColor); // vertical yellow rectangle lace
    rect(canes, turboyy, 10, turboyellow);

    // Cursor tracking text
    fill(0);
    textSize(20);
    textFont(font1);
    text(mouseX + "," + round(mouseY),500,50);
    setTimeout(function() { // White background will appear after 100 milliseconds
      fadeText();
    }, 100);

    // Defines the grid animation

    canes += 20;

    if (canes > height * 1/3.3) { // After canes value hits 30% of the canvas, the green line stops and the yellow rectangle's boundaries shortened to a width of 200.
        //background(255);
        // canes = 0; // it has to be an equal call otherwise += stops the grid animation.
        turboyellow = 200 - random(20);
        turbogreen = 0;
    }
    
    if (canes > height * 2/3) { // After canes value hits (height * 200), the yellow and green lines continue on the bottom right of the canvas.
      //background(255);
      // canes = 0; // it has to be an equal call otherwise += stops the grid animation.
      turboyy = 300;
      turbogx = 300;
      turboyellow = 500 - random(50);
      turbogreen = width - random(50);
    }

    if (canes > height * 400) { // After canes value hits (height * 400), the grid animation resets.
      //background(255);
      canes = 0
      turboyellow = height - random(50);
      turbogreen = width - random(50);
      turboyy = 0;
      turbogx = 0;
    }

    if(keyIsPressed) { true/false // activates keyboard control and image toggle for stamps
      imageChoice();
      keyChoice();
    }

    // A brown square, a red square, a green oval, and a purple hexagon will appear once it's clicked
    if (mouseIsPressed && khazi) { // True / false test
      console.log("Say hello to your new shapes!");
      fill(224,132,79,100);
      rect(200,200,200,200); // big brown square
      fill(255,255,0,120);
      rect(215,215,170,170); // middle yellow square
      fill(255,100,0,100);
      rect(250,250,100,100); // small middle orange square
      fill(230,75,75,75);
      rect(100,100,50,50); // that small red square on the left?
      fill(0,80,0,50);
      ellipse(300,500,150,85); // smaller green oval on top of the big one
      fill(0,130,0,100);
      ellipse(300,500,200,100); // big green oval
      hexagon(480,130,'rgba(213, 90, 230, 1)'); // purple hexagon on the right
    }

    // A text saying "Chrysler was here!" will appear when you click on the top left quadrant of the canvas
    if (mouseIsPressed && mouseX < 200 && mouseY < 200) {
      console.log("You made text appear!");
      fill(0);
      textSize(20);
      textFont(font2);
      text("Chrysler was here!",50,50);
    }

    // A text saying "Chrysler was here!" will appear when you click on the bottom right quadrant of the canvas
    if (mouseIsPressed && mouseX > 400 && mouseY > 400) {
      console.log("You made text appear!");
      fill(200,0,0);
      textSize(20);
      textFont(font2);
      text("April is Tax Month!",350,550);
    }

    if (colorTogg) { // red and blue if true
      horColor = 'rgba(237, 43, 43, 0.5)';
      verColor = 'rgba(85, 103, 242, 0.5)';
    } else { // revert back to yellow and green if false
      horColor = 'rgba(120,255,0,0.5)';
      verColor = 'rgba(255,200,10,0.5)';
    }

}

function keyPressed() { 
    // Change colors of the background laces
    if ( key == 'i' || key == 'I' ) { 
      // Toggle Logic 
      colorTogg = !colorTogg;
    }

    if (key == '1') { // replay grid animation from very start
        canes = 0;
        turboyy = 0;
        turbogx = 0;
        turboyellow = height - random(50);
        turbogreen = width - random(50);
    }

    if (key == '2' || key == '0') {  // animation starts at (200, 200) instead of 0
        canes = 200;
        turboyy = 0;
        turbogx = 0;   
        turboyellow = height - random(50);
        turbogreen = width - random(50);
     }

    if (key == 'o' || key == 'O') { // toggle on khazi
      khazi = true;    
    }
    
    if (key == 'p' || key == 'P' || key == " ") { // toggle off khazi
      khazi = false;    
    }

}

// Stamp control paradigm
function keyChoice() {
    switch (key) {
      case 'a':
        console.log("a left -", consoleImgTxt); // going left
        cx+= -size;
        image(currentImg,cx,cy,size,size);
        break;
      case 'w':
        console.log("w up -", consoleImgTxt); // going up
        cy+= -size;
        image(currentImg,cx,cy,size,size);
        break;
      case 'd':
        console.log("d  right -", consoleImgTxt); // going right
        cx+= size;
        image(currentImg,cx,cy,size,size);
        break;
      case 's':
        console.log("s back -", consoleImgTxt); // going down
        cy+= size;
        image(currentImg,cx,cy,size,size);
        break;
      default:             // Default executes if the case labels
      console.log("None");   // don't match the switch parameter
      break;
      }
      key = '';  // you can empty it so it does not double trigger

}

// Image change control
function imageChoice() {
    switch (key) {
      case 'r':
        currentImg = im7; // In-N-Out stamp
        consoleImgTxt = 'Dutch Bros';
        break;
      case 't':
        currentImg = im1; // In-N-Out stamp
        consoleImgTxt = 'In-N-Out';
        break;
      case 'y':
        currentImg = im4; // Chick-fil-A stamp
        consoleImgTxt = 'Chick-fil-A';
        break;
      case 'u':
        currentImg = im2; // Taco Bell stamp
        consoleImgTxt = 'Taco Bell';
        break;
      case 'b':
        currentImg = im3; // Raising Cane's stamp
        consoleImgTxt = "Raising Cane's";
        break;
      case 'n':
        currentImg = im5; // Carl's Jr stamp
        consoleImgTxt = "Carl's Jr";
        break;
      case 'm':
        currentImg = im6; // Pizza Hut stamp
        consoleImgTxt = 'Pizza Hut';
        break;
      default:             // Default executes if the case labels
      console.log("None");   // don't match the switch parameter
      break;
      }
      // key = '';  // you can empty it so it does not double trigger
}


// Places a white rectangle on top of constant changing text
function fadeText() {
  fill(255); // Set fill to white for fading effect
  rect(490,30,90,30);
}

// Creates a hexagon shape
function hexagon(transX, transY, filler) {
  noStroke();
  // fill('rgba(213, 90, 230, 1)');
  fill(filler);
  push();
  translate(transX, transY);
  rotate(radians(0));
  scale(0.3);
  beginShape();
	vertex(-75, -130);
	vertex(75, -130);
	vertex(150, 0);
	vertex(75, 130);
  vertex(-75, 130);
	vertex(-150, 0);
	endShape(CLOSE); 
	pop();
}