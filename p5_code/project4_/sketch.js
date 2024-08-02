
// This contains the use of both Scenemanager and P5.play
// Documentation and additional examples of these libraries can be found at:
//https://github.com/mveteanu/p5.SceneManager
//http://molleindustria.github.io/p5.play/


let image1_up, image2_over;
let snd1,snd2,snd3;
// var duration;
// var  slideWidth = 500;

// global manager object
var mgr;

// define your p5.play sprites that you want to use in more that 1 scene.
var greenBtn;
var logo;

function preload() {
    // sound should be loaded so its available for all places.
   snd1 = loadSound("assets/sleepylofi.mp3"); // Background music
   snd2 = loadSound("assets/whoop.mp3"); // Sound Effect
   snd3 = loadSound("assets/sportsmusic.mp3"); // Alternative music
   img1 = loadImage("assets/littlesaigon.jpg"); // Little Saigon
   img2 = loadImage("assets/thomasfallon.jpg"); // Thomas Fallon Statue
   img3 = loadImage("assets/leessandwiches.jpg"); // Lee's Sandwiches
   img4 = loadImage("assets/origsanjosestate.jpg"); // Original San Jose State Campus
}

function setup() {
    createCanvas(600, 500);
    //console.log(hell);
    mgr = new SceneManager();

    logo = createSprite(0, 0);
    logo.addAnimation("normal", "assets/sjinteractive001.png",  "assets/sjinteractive002.png");

    // Preload scenes. Preloading is normally optional
    // ... but needed if showNextScene() is used.
    mgr.addScene (splash);
    mgr.addScene (main);
    mgr.addScene (help);
    mgr.showNextScene();
    snd1.play();

}

function draw()
{

    // passthe current draw function into the SceneManager
    mgr.draw();
}

function mousePressed()
{
   // pass the mousePressed message into the SceneManager
  mgr.mousePressed();
}

function keyPressed()
{
    // You can optionaly handle the key press at global level...
    switch(key)
    {
        case '1':
            mgr.showScene(splash);
            break;
        case '2':
            mgr.showScene(main);
            break;
        case '3':
            mgr.showScene(help);
            break;
        case '4':
            if (!snd1.isPlaying() ) {
                snd1.play();
                snd3.pause();
            } else {
                snd1.pause();
                snd3.pause();
            }
            break;
        case '5':
            if (!snd3.isPlaying() ) {
                snd3.play();
                snd1.pause();
            } else {
                snd3.pause();
                snd1.pause();
            }
            break;
        case 'h':
            mgr.showScene(help);
            break;
    }

    // ... then dispatch via the SceneManager.
    mgr.keyPressed();
}
