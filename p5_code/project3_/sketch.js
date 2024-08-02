let ellipses = [];
let textAlarm, textDay;
let dotw;
let days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']
let pretzelColor, saltColor, alertColor;

function preload() {
  arial = loadFont('assets/arialroundedmtbold.TTF');
  helv = loadFont('assets/helvetica.ttf');
  bock = loadImage('assets/bockwurst.png');
  choco = loadImage('assets/chococake.png');
}

function setup() {
  createCanvas(800,800);
  background(255);
  angleMode(DEGREES);
  //setInterval(MakeItSalty, 1000); // Add ellipse every second
}

function draw() {
  textFont(arial);
  let handy = hour();   // 0-23
  let mandy = minute(); // 0-59
  let sandy = second(); // 0-59

  console.log("Hour:", handy, "Minute:", mandy, "Seconds:", sandy);

  let dotw = new Date();
  let textDay = days[dotw.getDay()];

  // Text Alarms

  if (handy == 19 && mandy <= 5) {
    textAlarm = 'Shower up!';
  } else if (handy == 7 && mandy <= 10) {
    textAlarm = 'Blast off to Walmart!';
  } else if (handy == 18 && mandy <= 10) {
    textAlarm = 'Eat dinner, you bozo!';
  } else if (handy == 13) {
    textAlarm = 'Homework, dun dun dun!';
  } else if (handy == 8) {
    textAlarm = 'Breakfast, baby!';
  } else {
    textAlarm = '';
  }

  // End of Text Alarms

  // Add 0 for numerals before 10
  if (mandy < 10) {
    mandy = '0' + mandy;
  }

  if (sandy < 10) {
    sandy = '0' + sandy;
  }

  // Background changes during certain times of the day
  // Afternoon background (12:00pm - 6:00pm)
  if (handy >= 12 && handy <= 18) {
    background(105, 242, 255);
    pretzelColor = color(143,87,44);
    saltColor = color(190);
    alertColor = color(0);
  }

  // Morning background (6:00am - 11:00am)
  if (handy >= 6 && handy < 12) {
    background(255, 218, 71);
    pretzelColor = color(143,87,44);
    saltColor = color(230);
    alertColor = color(0);
  }

  // Midnight background (12:00am - 5:00am)
  if (handy < 6) {
    background(50, 0, 71);
    pretzelColor = color(222,200,242);
    saltColor = color(230);
    alertColor = color(255);
  }

  // Evening background (7:00pm - 11:00pm)
  if (handy >= 19) {
    background(191, 8, 161);
    pretzelColor = color(247,164,253);
    saltColor = color(230);
    alertColor = color(255);
  }

  
  // if (millisandy >= 1001) {
  //   millisandy -= 1000;
  // }

  // Clock Code Testing
  // fill(128, 0, 163);
  // ellipse(150,400,100,100);

  // fill(0);
  // textSize(32);
  // text(handy + period, 130, 410);

  // fill(45, 209, 27);
  // ellipse(350,400,100,100);

  // fill(0);
  // textSize(32);
  // text(mandy, 340, 410);

  // fill(253, 255, 130);
  // ellipse(550,400,100,100);

  // fill(0);
  // textSize(32);
  // text(sandy, 535, 410);

  // fill(0);
  // textSize(32);
  // text(round(millisandy,0), 635, 410);

  drawRectangles(handy);

  push();
  translate(170,0);
  scale(0.7);
  drawRectanglesMins(mandy);
  pop();

  // push();
  // translate(330,20);
  // scale(0.4);
  // drawRectanglesSecs(sandy);
  // pop();

  // German Flag
  push();
  translate(width/2 + 170,height/2 - 320);

  push();
  fill(0);
  rect(0,0,170,30);
  fill(230,0,0);
  rect(0,30,170,30);
  fill(230,230,0);
  rect(0,60,170,30);
  pop();
  
  pop();

  // Pretzel
  push();
  translate(100, 200);
  scale(0.7);
  noFill();
  // stroke(143,87,44);
  stroke(pretzelColor);
  strokeWeight(80);

  beginShape();
  curveVertex(300, 400);
  curveVertex(225, 575);
  curveVertex(450, 300);
  curveVertex(200, 0);
  endShape();

  beginShape();
  curveVertex(600, 0);
  curveVertex(425, 300);
  curveVertex(675, 575);
  curveVertex(200, 100);
  endShape();

  beginShape();
  curveVertex(350, 350);
  // Begin point
  curveVertex(425, 300);
  // End point
  curveVertex(300, 50);
  curveVertex(-300, 350);
  endShape();

  beginShape();
  curveVertex(900, 400);
  curveVertex(300, 50);
  curveVertex(175, 300);
  curveVertex(300, 150);
  endShape();

  beginShape();
  curveVertex(500, -600);
  curveVertex(175, 300);
  curveVertex(450, 550);
  curveVertex(800, 300);
  endShape();

  beginShape();
  curveVertex(500, 300);
  curveVertex(450, 550);
  curveVertex(725, 300);
  curveVertex(500, -1000);
  endShape();

  beginShape();
  curveVertex(500, 800);
  curveVertex(725, 300);
  curveVertex(575, 50);
  curveVertex(50, 300);
  endShape();

  beginShape();
  curveVertex(1000, 250);
  curveVertex(575, 50);
  curveVertex(450, 300);
  curveVertex(500, 750);
  endShape();

  pop();

  
  if (sandy == 0) {
    ellipses = []; // Reset the ellipses array at the start of a new minute
  }

  if (ellipses.length < sandy) {
    MakeItSalty();
  }

  for (let ellipse of ellipses) {
    ellipse.show();
  }

  // Display text alarm

  push();
  textFont(arial);
  textSize(48);
  fill(alertColor);
  text(textAlarm, 100, 700);
  pop();

  push();
  textFont(helv);
  textSize(25);
  fill(alertColor);
  text(textDay, 650, 50);
  pop();

  // Alarm
  
  // function MakeItSalty(numOfSalt) {
  //   let numCols = 4;
  //   let numRows = Math.ceil(numOfSalt / numCols); // Calculate the number of rows
  //   let gapX = 30; // Gap between columns
  //   let gapY = 30; // Gap between rows
  //   let startX = gapX; // Starting x-coordinate
  //   let startY = gapY; // Starting y-coordinate
  
  //   for (let i = 0; i < numOfSalt; i++) {
  //     noStroke();
  //     fill(230);
  //     ellipse(startX+30, startY+20, 15, 17);
  
  //     // Update the starting coordinates for the next rectangle
  //     startX += gapX;
  //     if (i % 2 !== 0) {
  //     // if (i % numCols === numCols - 1) {
  //       startX = gapX; // Reset x-coordinate for the next row
  //       startY += gapY; // Move to the next row
  //     }
  //   }
}

  // Function to Make Pretzel Salty and Class Function for Ellipse Salt

  function MakeItSalty() { // adds one particle of salt
    let x = random(200, 600);
    let y = random(200, 600);
    let newEllipse = new Ellipse(x, y);
    ellipses.push(newEllipse);
  }

  class Ellipse {
    constructor(x, y) {
      this.x = x;
      this.y = y;
      // this.diameter = 50; // Diameter of the ellipse
    }
  
    show() {
      fill(saltColor);
      ellipse(this.x, this.y, 15, 17);
    }
  }

  function drawRectangles(numRectangles) {
    let numRows = Math.ceil(numRectangles / 2); // Calculate the number of rows
    let gapX = 60; // Gap between columns
    let gapY = 60; // Gap between rows
    let startX = gapX; // Starting x-coordinate
    let startY = gapY; // Starting y-coordinate
  
    for (let i = 0; i < numRectangles; i++) {
      noStroke();
      // fill(128, 0, 163);
      // rect(startX - 30, startY - 20, 50, 50);
      image(bock, startX - 30, startY - 20, 50, 50);
  
      // Update the starting coordinates for the next rectangle
      startX += gapX;
      if (i % 2 !== 0) {
        startX = gapX; // Reset x-coordinate for the next row
        startY += gapY; // Move to the next row
      }
    }
  }

  // function drawRectanglesMins(numRectangles) {
  //   let numCols = 4; // Calculates number of columns
  //   let numRows = Math.ceil(numRectangles / numCols); // Calculate number of rows
    
  //   let gapX = 40; // Gap between columns
  //   let gapY = 40; // Gap between rows
  //   let startX = gapX; // Starting x-coordinate
  //   let startY = gapY; // Starting y-coordinate

  //   for (let i = 0; i < numRectangles; i++) {
  //     noStroke();
  //     fill(45, 209, 27);
  //     rect(startX - 30, startY, 30, 30);

  //     // Update the starting coordinates for the next rectangle
  //     startX += gapX;
  //     if (i % numCols === numCols - 1) {
  //       startX = gapX; // Reset x-coordinate for the next row
  //       startY += gapY; // Move to the next row
  //     }
  //   }
  // }

  function drawRectanglesMins(numRectangles) {
    let numCols = 12; // Calculates number of columns
    let numRows = Math.ceil(numRectangles / numCols); // Calculate number of rows
    
    let gapX = 30; // Gap between columns
    let gapY = 40; // Gap between rows
    let startX = gapX; // Starting x-coordinate
    let startY = gapY; // Starting y-coordinate

    for (let i = 0; i < numRectangles; i++) {
      image(choco, startX - 30, startY - 20, 50, 50);

      // Update the starting coordinates for the next rectangle
      startX += gapX;
      if (i % numCols === numCols - 1) {
        startX = gapX; // Reset x-coordinate for the next row
        startY += gapY; // Move to the next row
      }
    }
  }

    function drawRectanglesSecs(numRectangles) {
      let numCols = 4; // Calculates number of columns
      let numRows = Math.ceil(numRectangles / numCols); // Calculate number of rows
      
      let gapX = 40; // Gap between columns
      let gapY = 40; // Gap between rows
      let startX = gapX; // Starting x-coordinate
      let startY = gapY; // Starting y-coordinate
  
      for (let i = 0; i < numRectangles; i++) {
        noStroke();
        fill(253, 255, 130);
        rect(startX - 30, startY, 30, 30);
  
        // Update the starting coordinates for the next rectangle
        startX += gapX;
        if (i % numCols === numCols - 1) {
          startX = gapX; // Reset x-coordinate for the next row
          startY += gapY; // Move to the next row
        }
      }
    }

    // function drawRectanglesMonth(numRectangles) {
    //   let numRows = 2; // Calculate number of rows
    //   let numCols = Math.ceil(numRectangles / numRows); // Calculate number of columns
      
      
    //   let gapX = 60; // Gap between columns
    //   let gapY = 60; // Gap between rows
    //   let startX = gapX; // Starting x-coordinate
    //   let startY = gapY; // Starting y-coordinate
  
    //   for (let i = 0; i < numRectangles; i++) {
    //     noStroke();
    //     fill(70, 160, 250);
    //     rect(startX - 30, startY, 50, 50);
  
    //     // Update the starting coordinates for the next rectangle
    //     startX += gapX;
    //     if (i % numCols === numCols - 1) {
    //       startX = gapX; // Reset x-coordinate for the next row
    //       startY += gapY; // Move to the next row
    //     }
    //   }
    // }

    // function drawRectanglesDays(numRectangles) {
    //   // let numRows = 4; // Calculate number of rows
    //   // let numCols = Math.ceil(numRectangles / numRows); // Calculate number of columns
      
    //   let numCols = 7;
    //   let numRows = Math.ceil(numRectangles / numCols); // Calculate number of columns

    //   let gapX = 30; // Gap between columns
    //   let gapY = 30; // Gap between rows
    //   let startX = gapX; // Starting x-coordinate
    //   let startY = gapY; // Starting y-coordinate
  
    //   for (let i = 0; i < numRectangles; i++) {
    //     noStroke();
    //     fill(255, 92, 51);
    //     rect(startX - 30, startY, 25, 25);
  
    //     // Update the starting coordinates for the next rectangle
    //     startX += gapX;
    //     if (i % numCols === numCols - 1) {
    //       startX = gapX; // Reset x-coordinate for the next row
    //       startY += gapY; // Move to the next row
    //     }
    //   }
    // }