
// =============================================================
// =                         BEGIN SCENES                      =
// =============================================================

// exmample of global var that can be used between scenes
let loy= 0;

////////////////////////////// 1 /////////////////
function intro()  {


    this.setup = function() {
      console.log("We are at setup for scene1");
      // do all stuff you want to initialize things,
      // as this it need to be called only once.
      background("blue");
      textAlign(CENTER);
      textSize(29);
    }

    // enter() will be called each time SceneManager switches
    // to this scene
    this.enter = function()  {
      animBall.visible = false;
        console.log("We are at entering scene1");
        // textX = 10;
        // textY = 0;

      loy = 100;
      background("red");
      sound2.stop();

    }


    this.draw = function()
    {
        background(0,0,255-loy);
        textAlign(CENTER);
        textSize(29);
        // fill(200,0,0);

        push();
        //
        translate(width/2,loy*3);
        fill(255);
        text("The journey begins...", 0, 100);
        text("Click to Continue", 0, 150);
        // ellipse(0,0,30,30);
        if (loy > 255) {
          loy = 0;
        } else {
          loy++;
        }
        //
        pop();


    }

    // this.keyPressed = function() {
    //
    //
    // }

    this.mousePressed = function() {
      this.sceneManager.showNextScene();
    }
}

///////////////////////  2  ////////////////////////

function scene2()  {
   let octo1,octo2;

   this.setup = function() {
      console.log("We are at setup for scene2");
      octo1 = new Octopi(400,600,color(255,0,0),.40);
      octo2 = new Octopi(650,200,color(0,200,50),.10);
      octo3 = new Octopi(100,100,color(255,200,0),.30);

  }

  this.enter = function() {
      animBall.visible = false;
      console.log("We are at scene2 (again?)");
      if (!sound2.isPlaying()) {
        sound2.loop(); // Loop the background music
      }
  }

    this.draw = function() {
      
      background(0,200,0);
      image(innout,0,0,800,600);

      push();
      fill(255);
      text("Hit 3 to go to the next screen!",400,200);
      pop();

      noStroke();
      octo1.update();
      octo1.display();
      octo2.update();
      octo2.display();
      octo3.update();
      octo3.display();
    }

    this.mouseDragged = function() {
      console.log("mouseDragged");
      octo1.moveupdate(mouseX,mouseY-40);
      octo2.moveupdate(650,200);
      octo3.moveupdate(400,300);
    }



  // this.keyPressed = function()  {
  //
  //       // switch(key)
  //       // {
  //       //     case 'h':
  //       //         mgr.showScene( scene3 );
  //       //     //     break;
  //       //     // case '2':
  //       //     //     mgr.showScene( scene2 );
  //       //     //     break;
  //       //     // case '3':
  //       //     //     mgr.showScene( scene3 );
  //       //     //     break;
  //       // }
  //
  //       // ... then dispatch via the SceneManager.
  //
  //   }





}






////////////////////////////// 3 /////////////////

function scene3() {

  let loy= 255;

    this.setup = function()  {
        console.log("We are at setup for scene3");
    }

    this.enter = function()  {
        let loy= 255;
        console.log("We are entering scene3");
        sound2.stop();
    }

    this.draw = function() {
      background(100,0,255-loy);
      textAlign(CENTER);
      textSize(29);

      animBall.visible = true;
      animBall.position.x = width/2;
      animBall.position.y = height/2;
      animBall.scale = .01*(loy/5);

        if (loy < 0) {
          loy = 255;
        } else {
          loy--;
        }

    }

    // this.mousePressed = function()  {
    //   this.sceneManager.showNextScene();
    // }



    // this.keyPressed = function()  {
    //
    //       switch(key)
    //       {
    //           case 'h':
    //               mgr.showScene( scene2 );
    //           break;
    //           // case '2':
    //           //     mgr.showScene( scene2 );
    //           //     break;
    //           // case '3':
    //           //     mgr.showScene( scene3 );
    //           default:
    //           mgr.showScene( scene1 );
    //
    //       }
    //
    //       // ... then dispatch via the SceneManager.
    //
    //   }

}


////////////////////////////// 4 /////////////////

function scene4() {

  let loy= 255;

    this.setup = function()  {
        console.log("We are at setup for scene 4");
    }

    this.enter = function()  {
        let loy= 255;
        animBall.visible = false;
        sound2.stop();
        console.log("We are entering scene 4");
    }

    this.draw = function() {
      background(60,60,0);
      textAlign(CENTER);
      textSize(29);
      fill(255);
      text("Woah, is that In-N-Out?",400,200);
      text("P.S. click on the screen for my Hey's! XD",400,250);
      image(innout,100,300,600,400);
    }

    this.mousePressed = function()  {
      sound1.play();
      mgr.showScene( scene4 );
    }



    // this.keyPressed = function()  {
    //
    //       switch(key)
    //       {
    //           case 'h':
    //               mgr.showScene( scene2 );
    //           break;
    //           // case '2':
    //           //     mgr.showScene( scene2 );
    //           //     break;
    //           // case '3':
    //           //     mgr.showScene( scene3 );
    //           default:
    //           mgr.showScene( scene1 );
    //
    //       }
    //
    //       // ... then dispatch via the SceneManager.
    //
    //   }

}


function theend() {

  this.setup = function()  {
      console.log("we are setting up on the result scene");
  }

  this.enter = function() {
     sound2.stop();
     animBall.visible = false;
     console.log("we are entering the result scene");
  }

  this.draw = function() {
    background(255,0,0);
    fill(255);
    text("This is all we had! \n Scept you can click on the screen \n to hear my blastin' shots! \n And oh, as a bonus, you can hit the 'a' \n key for more of my HEYs in \n all of the scenes! HAHAHA!",width/2,height/2);
  }

  this.mousePressed = function()  {
    sound3.play();
    mgr.showScene( scene5 );
  }
}
