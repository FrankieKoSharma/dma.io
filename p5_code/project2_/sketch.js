// Recording variables
// let recMode = false;
let can;  // create a canvas reference

// Variables that create the spirograph
let NUMSINES = 10; // how many of these things can we do at once? (These are the twisty circle thingies)
let sines = new Array(NUMSINES); // an array to hold all the current angles
let rad; // an initial radius value for the central sine
let i; // a counter variable
let objectAngle = 0;
let objectAngle2 = 0;
let sizeItUp = 0;
let sizeItUp2 = 0;
let moveIt = 0;
let bluej = 2;
let originalWidth, originalHeight;
let journal = -150;
let journal2 = -500;
let mack = 0;
let mick = 0;
let jerald = 960;
let jerald2 = 0;
let sizeOfPi = 150;
let direction = 1;
let direction2 = 1;
let centerX, centerY;

// play with these to get a sense of what's going on:
let fund = 0.005; // the speed of the central sine (aka size of the rotation)
let ratio = 1; // what multiplier for speed is each additional sine?
let alpha = 50; // how opaque is the tracing system

let trace = true; // are we tracing?

function setup() {
    can = createCanvas(1920, 1080);
    background(20);
    fill(255);
    frameRate(30); // slow down the framerate so everything can be drawn. no hurry.
    // noLoop();
    // 30 frames   times 10
    console.log(frameCount);
    originalWidth = width;
    originalHeight = height;

    // For the spirograph
    rad = height / 4; // compute radius for central circle
    background(20); // black screen
  
    for (let i = 0; i<sines.length; i++) {
      sines[i] = PI; // start EVERYBODY facing NORTH
    }

    centerX = width / 2;
    centerY = height / 2;
}

function draw() {
    //  start as true until 149
    if (frameCount < 150) { // grow and rotate act
        console.log("the first act");
        // translate(width / 4, height / 4); // Move origin to center of canvas
        bluej += 0.005;
        translate(width / bluej, height / 2);
        sizeItUp += 0.005;
        objectAngle += 1;
        if (sizeItUp < 0) sizeItUp = 0;
        if (sizeItUp > 1) sizeItUp = 1;
        push();
        scale(sizeItUp);
        rotate(radians(objectAngle));
        spiral(1);
        pop();
        // true between 150 and 299
    } else if (frameCount < 300) { // shrink and turn away to left corner act
        console.log("the second act");
        bluej -= 0.005;
        width -= 55;
        height -= 30;
        if (width < 0) width = 0;
        if (height < 0) height = 0;
        if (sizeItUp < 0) sizeItUp = 0;
        if (objectAngle < 0) objectAngle = 0;
        translate(width / bluej, height / 2);
        sizeItUp -= 0.02;
        objectAngle += 2;
        push();
        scale(sizeItUp);
        rotate(radians(objectAngle));
        spiral(1);
        pop();
        // true once it reaches frame 300
    } else if (frameCount < 500) { // come back to center of screen, grow back to normal size act
        console.log("the third act");
        width = originalWidth;
        height = originalHeight;
        journal += 27;
        if (journal > 1100) journal = 1100;
        journal2 += 6;
        if (journal2 > -300) journal2 = -300;
        sizeItUp2 += 0.02;
        if (sizeItUp2 >= 1) sizeItUp2 = 1;
        translate((width / 2) + journal - 730, height / 2 + journal2);
        push();
        scale(sizeItUp2);
        spiral(1);
        pop();
    } else if (frameCount < 800) { // create two spirals on screen, twice the speed
        console.log("the fourth act");
        translate((width / 2) + journal - 730, height / 2 + journal2);
        push();
        spiral(2);
        pop();

        translate((width / 2) - 100, height / 2 + journal2);
        push();
        rotate(radians(30));
        spiral(2);
        pop();
    } else if (frameCount < 1000) { // draw the spiral all over the screen
      console.log("the fifth act");
      // journal -= 20;
      mack += 60 * direction;
      mick += 60 * direction2;
      
      if (mack > (width - 500)) {
        direction = -1; // Change direction to left
      } else if (mack < 0) {
        direction = 1; // Change direction to right
      }

      if (mick > height) {
        direction2 = -1; // Change direction to up
      } else if (mick < 0) {
        direction2 = 1; // Change direction to down
      }

      // if (mack > (width - 490) && mick > 0) {
      //   direction2 = 1; // Change direction to down
      // } else if (mack < 0 && mick > height) {
      //   direction2 = -1; // Change direction to up
      // }

      translate((width / 2) + mack, mick);
      push();
      spiral(4);
      pop();
    } else if (frameCount < 1300) { // normal spiral with circular arc
      console.log("the sixth act")
      objectAngle2 += 0.1;
      sizeOfPi -= 2;
      mick += 30;
      jerald = map(cos(objectAngle2), 0, 1, width/2, 0);
      jerald2 = map(sin(objectAngle2), 0, -1, height, 0);

      fill(255, 30);
      arc(jerald, jerald2, sizeOfPi, sizeOfPi, 0, PI*2);

      translate((width / 2) + 500, (height / 2) - 300);
      push();
      spiral(2);
      pop();
    } else if (frameCount < 1450) { // normal spiral for the last with circular arc in reverse
      console.log("the seventh and final act")
      objectAngle2 += 0.1;
      sizeOfPi += 1;
      jerald = map(cos(objectAngle2), 0, -1, width/2, 0);
      jerald2 = map(sin(objectAngle2), 0, -1, height, 0);

      fill(255, 30);
      arc(jerald, jerald2, sizeOfPi, sizeOfPi, 0, PI*2);

      translate((width / 2) + 700, (height / 2) - 300);
      push();
      spiral(2);
      pop();
    } else if (frameCount < 1600) {
      stop();
    }

    // recordit();

    // sizeItUp += 0.005;
    redraw();

}

function spiral(speedr) {
    if (!trace) { // If tracing action is false
        background(20); // clear screen if showing geometry
        stroke(255, 255); // black pen
        strokeWeight(2);
        // noFill(); // don't fill
        fill(255,255,255,80);
      }
    
      // MAIN ACTION
    
      let spiralWidth = sines.length * (rad / 2); // Total width of the spiral, x-position on canvas
      push(); // start a transformation matrix
      translate(-spiralWidth / 2, 200); // move to middle of screen
    
      for (let i = 0; i < sines.length; i++) {
        let erad = 0; // radius for small "point" within circle... this is the 'pen' when tracing
        // setup for tracing
        if (trace) {
          stroke(255 * (float(i) / sines.length), alpha); // white
          fill(255, alpha / 2); // white too
          erad = 50.0 * (1.0 - float(i) / sines.length); // pen width will be related to which sine (aka pen size)
        }
        let radius = rad / (i + 1); // radius of the drawing area
        // objectAngle += sines[i]
    
        rotate(sines[i] * speedr); // rotate circle
        
        if (!trace) ellipse(0, 0, radius * 2, radius * 2); // if we're simulating, draw the sine IF trace is false
    
        // tracing path, size
        push(); // go up one level
        translate(0, radius); // move to sine edge
        if (!trace) ellipse(0, 0, 5, 5); // draw a little circle IF trace is false
        if (trace) ellipse(0, 0, erad, erad); // draw with erad if tracing
        pop(); // go down one level
    
        translate(0, radius); // move into position for next sine
        sines[i] = (sines[i] + (fund + (fund * i * ratio)) * speedr) % TWO_PI; // update angle based on fundamental
      }
    
      pop(); // pop down final transformation
}


/////////////////////// use both keyPressed and recordit ///////////

// function keyPressed() {

//     if (keyIsPressed === true) {
//         let k = key;
//         console.log("k is " + k);

//         if (k == 's' || k == 'S') {
//             console.log("Stopped Recording");
//             recMode = false;
//             noLoop();
//         }

//         if (k == ' ') {
//             console.log("Start Recording");
//             recMode = true;
//             loop();
//         }
//     }
// }

// function recordit() {  // new version
//     if (recMode == true) {
//         let ext = nf(frameCount, 4);
//         saveCanvas(can, 'frame-' + ext, 'jpg');
//         console.log("rec " + ext);
//     }
// }
