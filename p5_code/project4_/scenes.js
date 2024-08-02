
// =============================================================
// =                         BEGIN SCENES                      =
// =============================================================


////////////////////////////// 1 /////////////////
function splash()  {
  var textX;
  var textY;
  var loy= 0;  // exists as data saved when in the splash scene
  let btnevent1 =false;
  let btnevent2 =false;
  let btnevent3 =false;
  let showImage = false;

  // scene1.setup
  this.setup = function() {
    console.log("We are at setup for splash");
    // do all stuff you want to initialize things,
    // as this it need to be called only once.
    outputVolume(.15);  // turn down the volume.
  }

  // enter() will be called each time SceneManager switches
  // to this scene
  this.enter = function()  {
      console.log("We are at entering splash");
      background("grey");
      textAlign(CENTER);
      textSize(30);
      noStroke();

      // reset or disable the other scenes and their stuff
      // turn off the other scene stuff
      // make sure ghost is gone from this scene
    

  }


  this.draw = function()
  {
    background("orange");
    
    logo.visible = true;
    logo.position.x = width/2;
    logo.position.y = 250;
    logo.scale = 0.6;
 
                           // title,lx,ly, btnW, btnH, upcolor, rollcolor, downcolor
    btnevent1 = checkButtonPressEllipse("?",540,50,50,50,color(0,150,0),color(100),color(250));  
    if (btnevent1) { // help
      btnevent1 = false;
      this.sceneManager.showScene(help);
    }
                          // title,lx,ly, btnW, btnH, upcolor, rollcolor, downcolor
    btnevent2 = checkButtonPress("Start Exploring",width/2-260,height-70,150,40,color(60,120,220),color(100),color(250));
    if (btnevent2) {   // main or next scene
      btnevent2 = false;
       this.sceneManager.showScene(main);
    }

  }

  this.keyPressed = function() {
      fill(0,255,0);
      text(keyCode, textX, textY += 10);

      if ( textY > height )  {
          textX += 20;
          textY = 0;
      }
  }

  this.mousePressed = function() {

   
  }
}

///////////////////////  2  ////////////////////////

function main()  {
  let showImage = false;
  let onView;
  let year;
  let fact;
  let txtSize;

 this.y = 0;
  // var y = 0;
  this.lox = 50;
  // var lox = 50;

 this.loy = 120;
  // var loy = 120;

 let btnevent1 = false;

this.setup = function() {
    console.log("We are at setup for main");
    // make sure ghost is gone from this scene
}

this.draw = function() {
  logo.visible = false;
  background(41,162,255);
  // this is the draw function for all p5.play commands

  // title,lx,ly, btnW, btnH, upcolor, rollcolor, downcolor
  btnevent1 = checkButtonPress("Help",width-150,height-70,100,40,color(220,100,100),color(100),color(250));  
  if (btnevent1) { // help
    btnevent1 = false;
    this.sceneManager.showScene( help );
  }

  btnevent3 = checkButtonPress("Main Menu",width-320,height-70,130,40,color(60,120,220),color(100),color(250));  
  if (btnevent3) { // help
    btnevent3 = false;
    this.sceneManager.showScene(splash);
  }

  push();
  stroke(255);
  strokeWeight(5);
  line(50, height/2+100, width-50, height/2+100); // point 1, tilt 1, point 2, tilt 2
  pop();

  push();

  noStroke();
  fill(0, 240, 0);
  rect(150, 300, 50, 30);

  noStroke();
  fill(0, 240, 0);
  rect(300, 300, 50, 30);

  noStroke();
  fill(0, 240, 0);
  rect(250, 370, 50, 30);

  noStroke();
  fill(0, 240, 0);
  rect(350, 370, 50, 30);

  pop();

  if (showImage) {
    image(onView, 50, 50, 220, 220); // Adjust the position as needed
  }

  push();
  textAlign(LEFT);
  fill(0);
  noStroke();
  textSize(25);
  text(year, 290, 80); // Displays the year

  noStroke();
  textSize(txtSize);
  text(fact, 290, 120); // Displays a cool fact about a SJ artifact

  noStroke();
  textSize(20);
  text("1800", 50, 380);
  text("1900", 200, 380);
  text("2000", 400, 380);
  text("Present", 500, 380);

  pop();

  }  //end

  this.mousePressed = function() {
    if (mouseX > 150 && mouseX < 200 && mouseY > 300 && mouseY < 330) {
      showImage = true;
      onView = img4;
      year = "1857";
      fact = " SJSU's history began before the Civil War, as \n the first State Normal School, which trained \n teachers who educated the people of a young \n California. Now, SJSU is a dynamic \n comprehensive university that anchors the \n 10th largest city in the United States, \n and Spartans are found around the \n globe.";
      txtSize = 15;
      snd2.play();
    } else if (mouseX > 300 && mouseX < 350 && mouseY > 300 && mouseY < 330) {
      showImage = true;
      onView = img3;
      year = "1983";
      fact = " In 1983, Chieu and Henry's parents, Lê Văn \n Bá and Nguyễn Thị Hạnh, began borrowing \n Chieu's truck on weekends to sell bánh mì \n at the corner of 6th and Santa Clara streets, \n near the San Jose State University campus. \n Later in June of that year, they opened a brick \n and mortar shop in that same street corner \n where the original store stands today.";
      txtSize = 15;
      snd2.play();
    } else if (mouseX > 250 && mouseX < 300 && mouseY > 370 && mouseY < 400) {
      showImage = true;
      onView = img1;
      year = "Late 1970s";
      fact = " During the late 1970s, Vietnamese people started moving \n to Santa Clara County, with their motivation to work at \n high tech jobs in Silicon Valley. Stores opened up, and a \n community had slowly formed. Today, a large Little \n Saigon village with restaurants can be seen along Story \n Road, as well as a portion of its history along Senter Rd. \n \n Fun fact: Vietnamese immigrants make up \n 10% of the city's population, and has the most \n Vietnamese residents outside of Vietnam.";
      txtSize = 12;
      snd2.play();
    } else if (mouseX > 350 && mouseX < 400 && mouseY > 370 && mouseY < 400) {
      showImage = true;
      onView = img2;
      year = "1988";
      fact = " During the 1980's, San Jose's mayor, Tom \n McEnery commissioned a statue of Fallon \n raising the U.S. flag in San Jose, which \n costed over $800,000. It was ultimately \n completed in 1988. It was supposed to signify \n part of California's history, but the statue had \n been removed in April 2023 due to \n controversies that Fallon was a colonizer and \n found him to be very offensive.";
      txtSize = 15;
      snd2.play();
    }
  }
}



////////////////////////////// 3 /////////////////

function help() {

  this.setup = function()  {
      console.log("We are at setup for help");
      // access a different scene using the SceneManager

  }

  this.draw = function() {
    background(41,162,255);
    // this is the draw function for all p5.play commands

    logo.visible = true;
    logo.position.x = 100;
    logo.position.y = 450;
    logo.scale = 0.15;
   
    fill("black");
    noStroke();
    textAlign(CENTER);
    textSize(25);
    text("Click on different buttons to show different \n facts about San Jose, California.", width/2, 100);

    textSize(20);
    textAlign(LEFT);
    text("  1: Main Menu \n  2: Historical Interactive \n  3: Help Guide \n  4 & 5: Toggle Music \n Click on the green buttons to see its history.", width/2-250, 200);


    btnevent3 = checkButtonPress("Main Menu",width-380,height-70,130,40,color(60,120,220),color(100),color(250));  
  if (btnevent3) { // help
    btnevent3 = false;
    this.sceneManager.showScene(splash);
  }


  btnevent3 = checkButtonPress("Back to Game",width-170,height-120,130,40,color(240,60,60),color(100),color(250));  
  if (btnevent3) { // help
    btnevent3 = false;
    this.sceneManager.showScene(main);
  }

      
  }

 

}


function checkButtonPress(str,bx,by,boxW,boxH,upcolor,ovcolor,dncolor) {

let btnc = "";
let btnstate =false;

// Test if the cursor is over the box
if ( mouseX > bx - boxW &&
     mouseX < bx + boxW &&
     mouseY > by - boxH &&
     mouseY < by + boxH ) {
     overBox = true;

  if (!mouseIsPressed) {
    stroke(255);
    btnc = ovcolor;
    btnstate = false;
  } else {
    console.log(str + " pressed");
    stroke(255);
    btnc = dncolor;
    btnstate = true;
  }

} else {
  stroke(255);
  btnc = upcolor;
  overBox = false;
}

push();
translate(bx,by);
fill(btnc);
rect(0, 0, boxW, boxH,10); // draw the box

fill(20);
noStroke();
textSize(20);
textAlign(CENTER);
text (str,boxW/2,28);

  pop();

  return btnstate;

}


function checkButtonPressEllipse(str,bx,by,boxW,boxH,upcolor,ovcolor,dncolor) {

  let btnc = "";
  let btnstate =false;
  
  // Test if the cursor is over the box
  if ( mouseX > bx - boxW &&
       mouseX < bx + boxW &&
       mouseY > by - boxH &&
       mouseY < by + boxH ) {
       overBox = true;
  
    if (!mouseIsPressed) {
      stroke(255);
      btnc = ovcolor;
      btnstate = false;
    } else {
      console.log(str + " pressed");
      stroke(255);
      btnc = dncolor;
      btnstate = true;
    }
  
  } else {
    stroke(255);
    btnc = upcolor;
    overBox = false;
  }
  
  push();
  translate(bx,by);
  fill(btnc);
  ellipse(0, 0, boxW, boxH, 10); // draw the box
  
  fill(20);
  noStroke();
  textSize(20);
  textAlign(CENTER);
  textSize(30);
  text (str,2,8);
  
    pop();
  
    return btnstate;
  
  }