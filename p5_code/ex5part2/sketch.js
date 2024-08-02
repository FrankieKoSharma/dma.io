// example 5.2

// This uses the transformation matrix tools to move,
//rotate and scale things as batch operations
// *** PART 1: Arrays Catalog
  // 11 x 11
let lionarr = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 7, 7, 7, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 7, 7, 7, 7, 7, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 7, 7, 7, 7, 7, 7, 7, 7, 0, 0, 5, 5, 5, 0, 0, 0, 0, 0, 0],
    [0, 7, 7, 7, 7, 7, 7, 7, 7, 7, 5, 9, 9, 9, 9, 0, 0, 0, 0, 0],
    [0, 0, 7, 7, 7, 7, 7, 7, 7, 5, 9, 8, 8, 8, 8, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 9, 1, 1, 2, 1, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 9, 1, 1, 1, 1, 2, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 9, 1, 3, 3, 3, 3, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 1, 3, 3, 3, 0, 0, 0, 0, 0],
    [0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 3, 3, 0, 0, 0, 0, 0, 0],
    [0, 9, 5, 0, 0, 1, 0, 0, 0, 0, 8, 1, 1, 3, 0, 0, 0, 0, 0, 0],
    [0, 0, 9, 0, 0, 1, 0, 0, 0, 8, 1, 1, 1, 3, 4, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 1, 0, 0, 8, 1, 4, 1, 1, 3, 4, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 1, 0, 0, 1, 1, 4, 1, 1, 3, 4, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 4, 1, 1, 4, 4, 0, 0, 0, 0],
    [6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6],
    [6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6],
    [6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6]
];

let lionarrmono = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 5, 5, 5, 5, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 5, 5, 1, 5, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 5, 5, 5, 5, 1, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 5, 5, 5, 5, 5, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 5, 5, 5, 5, 0, 0, 0, 0, 0],
    [0, 0, 0, 5, 5, 0, 0, 0, 0, 0, 0, 5, 5, 5, 0, 0, 0, 0, 0, 0],
    [0, 1, 1, 0, 0, 5, 0, 0, 0, 0, 5, 5, 5, 5, 0, 0, 0, 0, 0, 0],
    [0, 0, 1, 0, 0, 5, 0, 0, 0, 5, 5, 5, 5, 5, 5, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 5, 0, 0, 5, 5, 5, 5, 5, 5, 5, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 5, 0, 0, 5, 5, 5, 5, 5, 5, 5, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
];

let wolfarr = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 0, 0, 0, 0, 5, 0, 0],
    [0, 0, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 0, 0, 5, 0],
    [0, 0, 0, 0, 0, 0, 0, 6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 6, 6, 6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [1, 1, 1, 1, 1, 1, 6, 6, 6, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 6, 6, 6, 7, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 6, 6, 6, 6, 1, 1, 1, 1, 1, 1, 1, 6, 6, 1],
    [2, 2, 2, 2, 2, 2, 6, 6, 6, 6, 2, 2, 2, 2, 2, 2, 6, 7, 2, 2],
    [2, 2, 2, 2, 2, 2, 6, 6, 6, 6, 6, 2, 2, 2, 2, 2, 6, 7, 2, 2],
    [2, 2, 2, 2, 2, 2, 6, 7, 6, 6, 6, 6, 2, 2, 2, 2, 6, 7, 2, 2],
    [3, 3, 3, 3, 3, 3, 6, 7, 6, 6, 6, 7, 7, 6, 3, 3, 6, 7, 3, 3],
    [3, 3, 3, 3, 3, 3, 6, 7, 6, 3, 6, 6, 6, 7, 3, 6, 7, 3, 3, 3],
    [3, 3, 3, 3, 3, 6, 6, 7, 6, 3, 6, 6, 6, 7, 6, 7, 3, 3, 3, 3],
    [4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
    [4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
    [4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4]
];

// Funny Crab Array by Bebe T.
var crabarr = [
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 2, 3, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 1, 1, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 1, 2, 2, 0, 1, 0, 0, 0, 2, 2, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 1, 2, 0, 0, 0, 0, 0, 1, 1, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 3, 2, 0, 2, 0, 0, 0, 0, 0, 0, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 3, 1, 0, 3, 0, 0, 0, 2, 0, 0, 1, 3, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 3, 1, 2, 3, 0, 0, 0, 0, 2, 3, 2, 3, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 2, 1, 0, 0, 0, 0, 0, 0, 0, 2, 3, 0, 0, 1, 0, 1, 0, 1, 0],
  [0, 0, 0, 2, 1, 0, 0, 0, 0, 0, 1, 2, 0, 0, 0, 1, 1, 1, 0, 1, 0],
  [0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0],
  [0, 0, 0, 0, 2, 2, 2, 2, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 4, 3, 3, 3, 0, 3, 0, 3, 3, 4, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 5, 4, 4, 4, 4, 4, 4, 4, 4, 5, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 2, 1, 6, 6, 6, 6, 6, 6, 6, 6, 1, 2, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 1, 2, 0, 7, 6, 0, 0, 6, 7, 0, 2, 1, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 2, 0, 0, 7, 0, 0, 0, 0, 7, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 6, 0, 0, 0, 0, 6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
];

// Weigh / Balance Array by Alejandro M.
var weigharr = [
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 3, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 3, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 3, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 1, 3, 0, 0, 0, 3, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 3, 0, 0, 0, 3, 1, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 3, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2]
];

    // 5 x 5
let textarr = [
    ["money", "money", "money", "money", "money"],
    ["money", "face", "face", "money", "money"],
    ["money", "face", "face", "blood", "money"],
    ["money", "face", "face", "blood", "money"],
    ["money", "money", "money", "money", "blood"]
];


let font1;
let images =[];

let currentPage = 0;

function preload()  {
       font1 = loadFont('assets/oswald.ttf');
       images[0] = loadImage('assets/walmart.jpg');
       images[1] = loadImage('assets/target.png');
       images[2] = loadImage('assets/cocacola.png');
       images[3] = loadImage('assets/sesamestreet.png');
}

function setup() {
     createCanvas(800, 700);
     background(0, 60, 150);
     fill(100);
     textAlign(LEFT);
     textFont(font1);
      
}

function draw() {
    background(0,240,240);

    if (currentPage == 1) {
      //2darr, x,y,rot,scale, alpha
      // mapToRedCircles(lionarr, 100, 50, 20, 1, 400);
      // mapToMonoPixels(wolfarr, 580, 250, 220, 0.9, 150);
      // mapToColorPixels(lionarr, 350, 200, 75, 1.5, 255);
      // mapToColorPixels(wolfarr, 750, 375, 120, 1, 350);
      mapToColorPixels(lionarr, 90, 200, 0, 1.2, 255);
      mapToColorPixels2(wolfarr, 430, 200, 0, 1.2, 255);

      push();
      translate(40,50);
      fill(153,31,0);
      textSize(25);
      let t = "Here are my original numerical and text arrays."
      t += "\n";
      t += "Numerical is lion, and text is wolf";
      text(t,0,0,450);  // the 4th argument is the textWidth per line.
      pop();
 

    } else if (currentPage == 2) {

     mapToColorShapes(crabarr, -30, 0, 0, 1, 8);
     mapToColorPixels(lionarr, 520, 260, 45, 0.5, 255);
     mapToColorShapes(lionarr, 120, 480, 0, 0.65, 255);
     mapToColorShapes(weigharr, 270, 180, -25, 1.2, 120);
     mapToColorText(textarr, 450, 50, -15, 0.45, 175);
     mapToColorText(textarr, 10, 350, 10, 1.55, 255); 

     push();
     translate(40,50);
     fill(153,31,0);
     textSize(20);
     let t = "Here's my two arrays have been remapped in various styles, including text, various shapes and bitmaps, etc."
     text(t,0,0,300);
     pop();


     // array, image, lx, ly, rotate, scale, fade
    } else if (currentPage == 3) {
        mapToRedCircles(weigharr, 100, 400, 35, 0.6);
        mapToColorPixels(crabarr, 400, 500, -20, 1.2);
        mapToBitMaps(crabarr, images, 140, 90, 25, 0.9);
        mapToTintedBitMaps(weigharr, images, 400, 120, 0, 1, 190);
        push();
        translate(40,50);
        fill(153,31,0);
        textSize(20);
        let t = "Here are Bebe and Alejandro's numerical arrays";
        t += "\n";   // this is a command you can put in text to create a line break.
        t += "mapped in two different ways.";
        text(t,0,0,400);
        pop();

    } else {

        // Page 0
        push();
        translate(80,100);
        fill(153,31,0);
        textSize(40);
        text ("My groups memebers were Bebe and Alejandro.",0 ,0, 800 );
        translate(0,60);
        textSize(20);
        text ("I have 8 mapped images, copied at least twice for a total of more than 16.",0,0,800);
        translate(250,120);
        mapToColorPixels(lionarr, -50, 0, 0, 1, 255);
        pop();

    }
}

// KEY CONTROLS
function keyPressed() { 
    //console.log(key);
     // or 
    if ( key == '1' ) { 
      console.log("Page 1");
      currentPage = 1;

     } else if ( key == '2' ) { 
        console.log("Page 2");
        currentPage = 2;
        
     } else if ( key == '3' ) { 
        console.log("Page 3");
        currentPage = 3;   
     } else {
        currentPage = 0;

     }
  
}

// the map functions.


// Mapping Out Black and White Pixels
//2darr, x,y,rot,scale, alpha
function mapToMonoPixels(arr,lx,ly,rot,sc,fade) {
    push();
    translate(lx,ly);
    rotate(radians(rot));
    scale(sc);
    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < arr[0].length; j++) {
            fill(arr[i][j] * 128, fade);
            rect(j * 12, i * 12, 10, 10);
        }
    }
   pop();
}

function mapToOctagons(arr,lx,ly,rot,sc,fade,color) {
  push();
  translate(lx,ly);
  rotate(radians(rot));
  scale(sc);
  for (var i = 0; i < arr.length; i++) {
      for (var j = 0; j < arr[0].length; j++) {
          noStroke();
          fill(arr[i][j] * 128, fade);
          drawOctagon((j * 15) + 30, (i * 15) + 440, 6, color);
      }
  }
 pop();
}

// Mapping Out Colored Pixels
//x,y,rot,scale,alpha
function mapToColorPixels(arr,lx,ly,rot,sc,fade) {
    push();
    translate(lx,ly);
    rotate(radians(rot));
    scale(sc);
    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < arr[0].length; j++) {
             let value = arr[i][j];
              if ( value == 0 ) {
                fill(158, 239, 255, fade);
              } else if ( value == 1 ){
                fill(255, 200, 0, fade);
              } else if ( value == 2 ) {
                  fill(0, 0, 0, fade);
              } else if ( value == 3 ){
                fill(255, 223, 107, fade);
              } else if ( value == 4 ) {
                fill(204, 160, 0, fade);
              } else if ( value == 5 ) {
                fill(89, 45, 22, fade); 
              } else if ( value == 6 ) {
                fill(0, 178, 0, fade);
              } else if ( value == 7 ){
                fill(227, 250, 255, fade);
              } else if ( value == 8 ) {
                fill(227, 178, 0, fade);
              } else if ( value == 9 ) {
                fill(69, 32, 12, fade); 
            }
            rect(j * 12, i * 12, 10, 10);
        }
    }
    pop();

}

function mapToColorPixels2(arr,lx,ly,rot,sc,fade) {
  push();
  translate(lx,ly);
  rotate(radians(rot));
  scale(sc);
  for (var i = 0; i < arr.length; i++) {
      for (var j = 0; j < arr[0].length; j++) {
           let value = arr[i][j];
            if ( value == 0 ) {
              fill(255, 36, 255, fade);
            } else if ( value == 1 ){
              fill(228, 28, 243, fade);
            } else if ( value == 2 ) {
              fill(190, 10, 224, fade);
            } else if ( value == 3 ){
              fill(177, 0, 217, fade);
            } else if ( value == 4 ) {
              fill(123, 0, 123, fade);
            } else if ( value == 5 ) {
              fill(255, 255, 255, fade); 
            } else if ( value == 6 ) {
              fill(100, 100, 100, fade);
            } else if ( value == 7 ){
              fill(70, 70, 70, fade);
            } else if ( value == 8 ) {
              fill(227, 178, 0, fade);
            } else if ( value == 9 ) {
              fill(69, 32, 12, fade); 
          }
          rect(j * 12, i * 12, 10, 10);
      }
  }
  pop();

}

function mapToRedCircles(arr,lx,ly,rot,sc,fade) {
  push();
  translate(lx,ly);
  rotate(radians(rot));
  scale(sc);
  for (var i = 0; i < arr.length; i++) {
      for (var j = 0; j < arr[0].length; j++) {
           let value = arr[i][j];
            if ( value == 0 ) {
              fill(255, 0, 0, fade);
            } else if ( value == 1 ){
              fill(125, 0, 0, fade);
            } else if ( value == 2 ) {
                fill(255, 212, 212, fade);
            } else if ( value == 3 ){
              fill(255, 107, 107, fade);
            } else if ( value == 4 ) {
              fill(179, 55, 55, fade);
            } else if ( value >= 5 ) {
              fill(255, 161, 161, fade); 
          }
          noStroke();
          ellipse(j * 9, i * 9, 12, 12);
      }
  }
  pop();

}

// Mapping Out Colored Shapes
function mapToColorShapes(arr,lx,ly,rot,sc,fade) {
    push();
    translate(lx,ly);
    rotate(radians(rot));
    scale(sc);
    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < arr[0].length; j++) {
             let value = arr[i][j];
              if ( value == 0 ) {
                  fill(200,70,0, fade);
                  ellipse(j * 12, i * 12, 10, 10);
              } else if ( value == 1 ){
                  fill(50,0,30, fade);
                   rect(j * 12-6, i * 12-6, 10, 10,2);
              } else {
                  fill(0,150,0, fade);
                   ellipse(j * 12, i * 12, 15, 10,5);
              }
        }
    }
    pop();

}

// Mapping Out Colored Text
function mapToColorText(arr,lx,ly,rot,sc,fade) {
    textSize(15);
    textAlign(CENTER);
    push();
    translate(lx,ly);
    rotate(radians(rot));
    scale(sc);
    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < arr[0].length; j++) {
             let value = arr[i][j];
              if ( value == "money" ) {
                  fill(20,170,0, fade);
              } else if ( value == "blood" ){
                  fill(200,0,30, fade);
              } else {
                  fill(255, fade);
              }
               text(value, j * 35, i * 10,100);
               //rect( j * 35, i * 10,100,100);
        }
    }
    pop();

}

// Mapping Out Bit Maps
//2darray,images in array,x,y,rot,scale,alpha
 function mapToBitMaps(arr,imgarr,lx,ly,rot,sc) {
            push();
            translate(lx,ly);
            rotate(radians(rot));
            scale(sc);
            let nuimg;
            for (var i = 0; i < arr.length; i++) {
                for (var j = 0; j < arr[0].length; j++) {
                     let value = arr[i][j];
                      if ( value == 0 ) {
                        nuimg = imgarr[0];
                      } else if ( value == 1 ){
                        nuimg = imgarr[2];
                      } else if ( value == 2 ) {
                        nuimg = imgarr[1];
                      } else {
                        nuimg = imgarr[3];
                      }
                    image(nuimg, j * 12, i * 12, 14, 14);
                }
            }
            pop();
        
}

//2darray,images in array ,x,y,rot,scale, alpha
function mapToTintedBitMaps(arr,imgarr,lx,ly,rot,sc,fade) {
push();
translate(lx,ly);
rotate(radians(rot));
scale(sc);
let nuimg;
let c;
for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < arr[0].length; j++) {
            let value = arr[i][j];
            if ( value == 0 ) {
            nuimg = imgarr[3];
            c = color(255,100,0,fade);
            } else if ( value == 1 ){
            c = color(255,0,255,fade);
            nuimg = imgarr[2];
            } else if ( value == 2 ) {
            nuimg = imgarr[1];
            c = color(20,200,120,fade);
            } else {
            nuimg = imgarr[0];
            c = color(120,0,240,fade);
            }
        
        c = color(255,fade);
        tint(c);
        image(nuimg, j * 9, i * 9, 15, 15);
    }
}
pop();

}

function drawOctagon(x, y, size, filler) {
  fill(filler);
  // Begin drawing the octagon
  beginShape();
  
  // Calculate the distance from the center to the vertices of the octagon
  let radius = size / (2 * Math.sin(Math.PI / 8));
  
  // Loop through each vertex of the octagon
  for (let i = 0; i < 8; i++) { 
    // Calculate the angle for each vertex
    let angle = TWO_PI / 8 * i;
    
    // Calculate the coordinates of the vertex
    let vertexX = x + cos(angle) * radius;
    let vertexY = y + sin(angle) * radius;
    
    // Add the vertex to the shape
    vertex(vertexX, vertexY);
  }
  
  // End drawing the octagon
  endShape(CLOSE);
}