
// This contains the use of both Scenemanager and P5.play
// Documentation and additional examples of these libraries can be found at:
//https://github.com/mveteanu/p5.SceneManager
//http://molleindustria.github.io/p5.play/


var image1_up,image2_over,sound1,sound2,sound3;
// var duration;
// var  slideWidth = 500;

function preload() {

  sound1 = loadSound("assets/hey.mp3");
  sound2 = loadSound("assets/medievalmarket.mp3");
  sound3 = loadSound("assets/blast.wav");
  innout = loadImage("assets/innout.png");

}


// define your p5.play sprites as global objects first.
var animBall;
var ghosty;


// global manager object
var mgr;

function setup() {
    createCanvas(800, 800);
  //  console.log(hell);

    animBall = createSprite(0, 0);
    animBall.addAnimation("normal", "assets/animball001.png",  "assets/animball004.png");  // first image, and last image

     mgr = new SceneManager();
    // Preload scenes. Preloading is normally optional
    // ... but needed if showNextScene() is used.
    mgr.addScene (intro);
    mgr.addScene (scene2);
    mgr.addScene (scene3);
    mgr.addScene (scene4);
    mgr.addScene (theend);
    mgr.showNextScene();

}

function draw()
{
    // pass the current draw function into the SceneManager
    mgr.draw();
}

function mousePressed()
{
   // pass the mousePressed message into the SceneManager
  mgr.mousePressed();
}

 function mouseMoved()
 {
   // pass the mouseMoved message into the SceneManager
   mgr.handleEvent("mouseDragged");
}

function mouseDragged()
{
   // pass the mouseMoved message into the SceneManager
    mgr.handleEvent("mouseDragged");
}

function keyPressed()
{
    // You can optionaly handle the key press at global level...
    switch(key)
    {
        case '1':
            mgr.showScene( intro );
            break;
        case '2':
            mgr.showScene( scene2 );
            break;
        case '3':
            mgr.showScene( scene3 );
            break;
        case '4':
            mgr.showScene( scene4 );
            break;
        case '5':
            mgr.showScene( theend );
            break;
        case 'a':
          sound1.play();
          break;
    }

    // ... then dispatch via the SceneManager.
    mgr.keyPressed();
}
