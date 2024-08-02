    // example #5.1 
    // this is a 7x7 array
let sky;
let fire;
let earth;
let eclipse;
let randomImg;
let fillItUp;
let sizeItUp = 0;

    var gridarr = [
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 3, 3, 2, 2, 2],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 3, 3, 2, 2, 2],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 3, 3, 2, 2, 2],
      [0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 3, 3, 3, 2, 2, 2],
      [0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 3, 3, 3, 2, 2, 2],
      [0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 3, 3, 3, 2, 2, 2],
      [0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 3, 3, 3, 2, 2, 2],
      [0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 3, 3, 3, 2, 2, 2],
      [0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 3, 3, 3, 2, 2, 2],
      [0, 0, 1, 1, 1, 0, 0, 1, 0, 0, 3, 3, 3, 2, 2, 2],
      [0, 0, 0, 1, 1, 0, 1, 0, 0, 0, 3, 3, 3, 2, 2, 2],
      [0, 0, 1, 0, 1, 1, 0, 0, 0, 0, 3, 3, 3, 2, 2, 2],
      [0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 3, 3, 3, 2, 2, 2],
      [0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 3, 3, 3, 2, 2, 2],
      [0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 3, 3, 3, 2, 2, 2],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 3, 3, 2, 2, 2]
  ];

  var gridarr2 = [
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

var circlearr = [
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

var octarr = [
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

  var imagearr = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 3, 3, 2, 2, 2],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 3, 3, 2, 2, 2],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 3, 3, 2, 2, 2],
    [0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 3, 3, 3, 2, 2, 2],
    [0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 3, 3, 3, 2, 2, 2],
    [0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 3, 3, 3, 2, 2, 2],
    [0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 3, 3, 3, 2, 2, 2],
    [0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 3, 3, 3, 2, 2, 2],
    [0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 3, 3, 3, 2, 2, 2],
    [0, 0, 1, 1, 1, 0, 0, 1, 0, 0, 3, 3, 3, 2, 2, 2],
    [0, 0, 0, 1, 1, 0, 1, 0, 0, 0, 3, 3, 3, 2, 2, 2],
    [0, 0, 1, 0, 1, 1, 0, 0, 0, 0, 3, 3, 3, 2, 2, 2],
    [0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 3, 3, 3, 2, 2, 2],
    [0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 3, 3, 3, 2, 2, 2],
    [0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 3, 3, 3, 2, 2, 2],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 3, 3, 2, 2, 2]
  ];

  var textarr = [
    ["sky", "sky", "sky", "sky", "sky", "sky", "sky", "sky", "sky", "sky", "sky", "sky", "sky", "sky", "sky", "sky", "sky", "sky", "sky", "sky"],
    ["sky", "sky", "sky", "sky", "sky", "sky", "sky", "sky", "sky", "sky", "sky", "sky", "sky", "sky", "sky", "sky", "sky", "sky", "sky", "sky"],
    ["sky", "sky", "sky", "cl", "cl", "cl", "sky", "sky", "sky", "sky", "sky", "sky", "sky", "sky", "sky", "sky", "sky", "sky", "sky", "sky"],
    ["sky", "sky", "cl", "cl", "cl", "cl", "cl", "sky", "sky", "sky", "sky", "sky", "sky", "sky", "sky", "sky", "sky", "sky", "sky", "sky"],
    ["sky", "cl", "cl", "cl", "cl", "cl", "cl", "cl", "cl", "sky", "sky", "mane", "mane", "mane", "sky", "sky", "sky", "sky", "sky", "sky"],
    ["sky", "cl", "cl", "cl", "cl", "cl", "cl", "cl", "cl", "cl", "mane", "ma", "ma", "ma", "ma", "sky", "sky", "sky", "sky", "sky"],
    ["sky", "sky", "cl", "cl", "cl", "cl", "cl", "cl", "cl", "mane", "ma", "ER", "ER", "ER", "ER", "sky", "sky", "sky", "sky", "sky"],
    ["sky", "sky", "sky", "sky", "sky", "sky", "sky", "sky", "sky", "mane", "ma", "lion", "lion", "BL", "lion", "sky", "sky", "sky", "sky", "sky"],
    ["sky", "sky", "sky", "sky", "sky", "sky", "sky", "sky", "sky", "mane", "ma", "lion", "lion", "lion", "lion", "BL", "sky", "sky", "sky", "sky"],
    ["sky", "sky", "sky", "sky", "sky", "sky", "sky", "sky", "sky", "mane", "ma", "lion", "bel", "bel", "bel", "bel", "sky", "sky", "sky", "sky"],
    ["sky", "sky", "sky", "sky", "sky", "sky", "sky", "sky", "sky", "sky", "mane", "lion", "bel", "bel", "bel", "sky", "sky", "sky", "sky", "sky"],
    ["sky", "sky", "sky", "lion", "lion", "sky", "sky", "sky", "sky", "sky", "sky", "lion", "bel", "bel", "sky", "sky", "sky", "sky", "sky", "sky"],
    ["sky", "ma", "mane", "sky", "sky", "lion", "sky", "sky", "sky", "sky", "ER", "lion", "lion", "bel", "sky", "sky", "sky", "sky", "sky", "sky"],
    ["sky", "sky", "ma", "sky", "sky", "lion", "sky", "sky", "sky", "ER", "lion", "lion", "lion", "bel", "JC", "sky", "sky", "sky", "sky", "sky"],
    ["sky", "sky", "sky", "sky", "sky", "lion", "sky", "sky", "ER", "lion", "JC", "lion", "lion", "bel", "JC", "sky", "sky", "sky", "sky", "sky"],
    ["sky", "sky", "sky", "sky", "sky", "lion", "sky", "sky", "lion", "lion", "JC", "lion", "lion", "bel", "JC", "sky", "sky", "sky", "sky", "sky"],
    ["sky", "sky", "sky", "sky", "sky", "sky", "lion", "lion", "lion", "lion", "lion", "JC", "lion", "lion", "JC", "JC", "sky", "sky", "sky", "sky"],
    ["gr", "gr", "gr", "gr", "gr", "gr", "gr", "gr", "gr", "gr", "gr", "gr", "gr", "gr", "gr", "gr", "gr", "gr", "gr", "gr"],
    ["gr", "gr", "gr", "gr", "gr", "gr", "gr", "gr", "gr", "gr", "gr", "gr", "gr", "gr", "gr", "gr", "gr", "gr", "gr", "gr"],
    ["gr", "gr", "gr", "gr", "gr", "gr", "gr", "gr", "gr", "gr", "gr", "gr", "gr", "gr", "gr", "gr", "gr", "gr", "gr", "gr"]
];

var wolfarr = [
    ["pink", "pink", "pink", "pink", "pink", "pink", "pink", "pink", "pink", "pink", "pink", "pink", "pink", "pink", "pink", "pink", "pink", "pink", "pink", "pink"],
    ["pink", "pink", "pink", "pink", "pink", "pink", "pink", "star", "pink", "pink", "pink", "pink", "pink", "pink", "pink", "pink", "pink", "pink", "pink", "pink"],
    ["pink", "pink", "pink", "pink", "pink", "pink", "pink", "pink", "pink", "pink", "pink", "pink", "star", "pink", "pink", "pink", "pink", "star", "pink", "pink"],
    ["pink", "pink", "star", "pink", "pink", "pink", "pink", "pink", "pink", "pink", "pink", "pink", "pink", "pink", "pink", "pink", "pink", "pink", "pink", "pink"],
    ["pink", "pink", "pink", "pink", "pink", "pink", "pink", "pink", "pink", "pink", "pink", "pink", "pink", "pink", "pink", "pink", "pink", "pink", "pink", "pink"],
    ["pink", "pink", "pink", "pink", "pink", "star", "pink", "pink", "pink", "pink", "pink", "pink", "pink", "pink", "pink", "star", "pink", "pink", "star", "pink"],
    ["pink", "pink", "pink", "pink", "pink", "pink", "pink", "wolf", "pink", "pink", "pink", "pink", "pink", "pink", "pink", "pink", "pink", "pink", "pink", "pink"],
    ["pink", "pink", "pink", "pink", "pink", "pink", "wolf", "wolf", "wolf", "pink", "pink", "pink", "pink", "pink", "pink", "pink", "pink", "pink", "pink", "pink"],
    ["sky", "sky", "sky", "sky", "sky", "sky", "wolf", "wolf", "wolf", "sky", "sky", "sky", "sky", "sky", "sky", "sky", "sky", "sky", "sky", "sky"],
    ["sky", "sky", "sky", "sky", "sky", "sky", "wolf", "wolf", "wolf", "parts", "sky", "sky", "sky", "sky", "sky", "sky", "sky", "sky", "sky", "sky"],
    ["sky", "sky", "sky", "sky", "sky", "sky", "wolf", "wolf", "wolf", "wolf", "sky", "sky", "sky", "sky", "sky", "sky", "sky", "wolf", "wolf", "sky"],
    ["darker", "darker", "darker", "darker", "darker", "darker", "wolf", "wolf", "wolf", "wolf", "darker", "darker", "darker", "darker", "darker", "darker", "wolf", "parts", "darker", "darker"],
    ["darker", "darker", "darker", "darker", "darker", "darker", "wolf", "wolf", "wolf", "wolf", "wolf", "darker", "darker", "darker", "darker", "darker", "wolf", "parts", "darker", "darker"],
    ["darker", "darker", "darker", "darker", "darker", "darker", "wolf", "parts", "wolf", "wolf", "wolf", "wolf", "darker", "darker", "darker", "darker", "wolf", "parts", "darker", "darker"],
    ["bean", "bean", "bean", "bean", "bean", "bean", "wolf", "parts", "wolf", "wolf", "wolf", "parts", "parts", "wolf", "bean", "bean", "wolf", "parts", "bean", "bean"],
    ["bean", "bean", "bean", "bean", "bean", "bean", "wolf", "parts", "wolf", "bean", "wolf", "wolf", "wolf", "parts", "bean", "wolf", "parts", "bean", "bean", "bean"],
    ["bean", "bean", "bean", "bean", "bean", "wolf", "wolf", "parts", "wolf", "bean", "wolf", "wolf", "wolf", "parts", "wolf", "parts", "bean", "bean", "bean", "bean"],
    ["ground", "ground", "ground", "ground", "ground", "ground", "ground", "ground", "ground", "ground", "ground", "ground", "ground", "ground", "ground", "ground", "ground", "ground", "ground", "ground"],
    ["ground", "ground", "ground", "ground", "ground", "ground", "ground", "ground", "ground", "ground", "ground", "ground", "ground", "ground", "ground", "ground", "ground", "ground", "ground", "ground"],
    ["ground", "ground", "ground", "ground", "ground", "ground", "ground", "ground", "ground", "ground", "ground", "ground", "ground", "ground", "ground", "ground", "ground", "ground", "ground", "ground"]
];

  var a = 0;

  function preload() { // def use preload for images, don't put it in setup.
      sky = loadImage("assets/sky.png");
      fire = loadImage("assets/fire.jpg");
      earth = loadImage("assets/earth.png");
      eclipse = loadImage("assets/eclipse.png");
      myFont = loadFont("assets/recoleta.otf");
  }

  function setup() {

      createCanvas(1400, 800);
      noStroke();

      background(120);

      for (var i = 0; i < gridarr2.length; i++) {
          for (var j = 0; j < gridarr2.length; j++) {
              a = gridarr2[i][j];
              if (a === 1) {
                  fill(255, 200, 0); // yellow lion
              } else if (a === 2) {
                  fill(0); // black
              } else if (a === 3) {
                  fill(255, 223, 107); // lion belly
              } else if (a === 4) {
                  //fill(145, 114, 0); // lion shade
                  fill(204, 160, 0); // lion shade 2
              } else if (a === 5) {
                  fill(89,45,22); // brown, lion mane
              } else if (a === 6) {
                  fill(0,178,0); // green grass
              } else if (a === 7) {
                  fill(227, 250, 255); // clouds
              } else if (a === 8) {
                  fill(227, 178, 0); // lion detailing
              } else if (a === 9) {
                  fill(69, 32, 12); // mane detailing
              } else {
                  fill(158, 239, 255); // sky
              }

              // typical way of mapping out a grid (value * scale) + offset
              // value  -- the increment counter from the forloop
              // scale -- a multiple that will effect value in terms of size/position of each drawing
              // offset -- relative movement of the x/y position on the canvas

              rect((j * 20) + 20, (i * 20) + 20, 20, 20);

              // Rotates all rectangles to 45 degrees
            //   push();
            //   translate((j * 20) + 20, (i * 20) + 20); // Translate to the center of the rectangle
            //   rotate(radians(45)); // Rotate each rectangle by 45 degrees
            //   rect(-10, -10, 20, 20); // Draw rectangle at relative coordinates to its center
            //   pop();
          }
      }

      for (var i = 0; i < wolfarr.length; i++) {
        for (var j = 0; j < wolfarr.length; j++) {
             a = wolfarr[i][j];
              if ( a == "pink" ) {
                fill(255, 36, 255);
              } else if ( a == "sky" ){
                fill(228, 28, 243);
              } else if ( a == "darker" ) {
                fill(190, 10, 224);
              } else if ( a == "bean" ){
                fill(177, 0, 217);
              } else if ( a == "ground" ) {
                fill(123, 0, 123);
              } else if ( a == "star" ) {
                fill(255, 255, 255); 
              } else if ( a == "wolf" ) {
                fill(100, 100, 100);
              } else if ( a == "parts" ){
                fill(70, 70, 70);
              }
            rect(j * 18 + 430, i * 18 + 350, 30, 30);
        }
    }

      for (var i = 0; i < circlearr.length; i++) {
        for (var j = 0; j < circlearr.length; j++) {
            a = circlearr[i][j];
            if (a === 1) {
                fill(255, 200, 0); // yellow lion
            } else if (a === 2) {
                fill(0); // black
            } else if (a === 3) {
                fill(255, 223, 107); // lion belly
            } else if (a === 4) {
                //fill(145, 114, 0); // lion shade
                fill(204, 160, 0); // lion shade 2
            } else if (a === 5) {
                fill(89,45,22); // brown, lion mane
            } else if (a === 6) {
                fill(0,178,0); // green grass
            } else if (a === 7) {
                fill(227, 250, 255); // clouds
            } else if (a === 8) {
                fill(227, 178, 0); // lion detailing
            } else if (a === 9) {
                fill(69, 32, 12); // mane detailing
            } else {
                fill(158, 239, 255); // sky
            }

            // typical way of mapping out a grid (value * scale) + offset
            // value  -- the increment counter from the forloop
            // scale -- a multiple that will effect value in terms of size/position of each drawing
            // offset -- relative movement of the x/y position on the canvas

            stroke(1);
            ellipse((j * 27) + 860, (i * 27) + 30, 20, 20);
        }
    }

    for (var i = 0; i < octarr.length; i++) {
        for (var j = 0; j < octarr.length; j++) {
            a = octarr[i][j];
            if (a === 1) {
                fillItUp = color(255, 200, 0); // yellow lion
            } else if (a === 2) {
                fillItUp = color(0); // black
            } else if (a === 3) {
                fillItUp = color(255, 223, 107); // lion belly
            } else if (a === 4) {
                fillItUp = color(204, 160, 0); // lion shade 2
            } else if (a === 5) {
                fillItUp = color(89, 45, 22); // brown, lion mane
            } else if (a === 6) {
                fillItUp = color(0, 178, 0); // green grass
            } else if (a === 7) {
                fillItUp = color(227, 250, 255); // clouds
            } else if (a === 8) {
                fillItUp = color(227, 178, 0); // lion detailing
            } else if (a === 9) {
                fillItUp = color(69, 32, 12); // mane detailing
            } else {
                fillItUp = color(158, 239, 255); // sky
            }

            // typical way of mapping out a grid (value * scale) + offset
            // value  -- the increment counter from the forloop
            // scale -- a multiple that will effect value in terms of size/position of each drawing
            // offset -- relative movement of the x/y position on the canvas

            noStroke();
            drawOctagon((j * 15) + 30, (i * 15) + 440, 6, fillItUp);
        }
    }

      for (var i = 0; i < textarr.length; i++) {
        for (var j = 0; j < textarr.length; j++) {
            a = textarr[i][j];
            if (a === "lion") {
                fill(255, 200, 0); // yellow lion
                justsometext = "lion";
            } else if (a === "BL") {
                fill(0); // black
                justsometext = "BL";
            } else if (a === "bel") {
                fill(255, 223, 107); // lion belly
                justsometext = "bel";
            } else if (a === "JC") {
                //fill(145, 114, 0); // lion shade
                fill(204, 160, 0); // lion shade 2
                justsometext = "JC";
            } else if (a === "mane") {
                fill(89,45,22); // brown, lion mane
                justsometext = "ma";
            } else if (a === "gr") {
                fill(0,178,0); // green grass
                justsometext = "gr";
            } else if (a === "cl") {
                fill(227, 250, 255); // clouds
                justsometext = "clo";
            } else if (a === "ER") {
                fill(227, 178, 0); // lion detailing
                justsometext = "ER";
            } else if (a === "ma") {
                fill(69, 32, 12); // mane detailing
                justsometext = "ma";
            } else {
                fill(158, 239, 255); // sky
                justsometext = "sky";
            }

            noStroke();
            textAlign(CENTER, CENTER);
            textFont(myFont);
            textSize(12);
            
            push();
            sizeItUp = sin(frameCount * 0.05) * 5; // Use sine function for animation
            if (sizeItUp < 0) {
                sizeItUp += 1;
            }
            if (sizeItUp > 5) {
                sizeItUp -= 1;
            }
            text(justsometext, (j * 20) + 440, (i * 15) + 20, 20, 20)
            pop();
        }
    }


    //   for (var i = 0; i < imagearr.length; i++) {
    //     for (var j = 0; j < imagearr.length; j++) {
    //         a = imagearr[i][j];
    //         if (a === 1) {
    //             randomImg = sky;
    //         } else if (a === 2) {
    //             randomImg = fire;
    //         } else if (a === 3) {
    //             randomImg = earth;
    //         } else {
    //             randomImg = eclipse;
    //         }

    //         // typical way of mapping out a grid (value * scale) + offset
    //         // value  -- the increment counter from the forloop
    //         // scale -- a multiple that will effect value in terms of size/position of each drawing
    //         // offset -- relative movement of the x/y position on the canvas

    //         image(randomImg, (j * 20) + 400, (i * 20) + 30, 20, 20);
    //     }
    // }

    // for (var i = 0; i < textarr.length; i++) {
    //     for (var j = 0; j < textarr.length; j++) {
    //         a = textarr[i][j];
    //         if (a === 1) {
    //             fill(255,0,128);
    //             justsometext = 'to';
    //         } else if (a === 2) {
    //             fill(255,0,0);
    //             justsometext = 'SJSU';
    //         } else if (a === 3) {
    //             fill(0);
    //             justsometext = 'spar';
    //         } else if (a === 4) {
    //             fill(13,200,20);
    //             justsometext = 'grad';
    //         } else {
    //             fill(0,128,255);
    //             justsometext = 'May';
    //         }

    //         textAlign(CENTER, CENTER);
    //         textFont(myFont);
    //         textSize(12);

    //         // fill(0);
            
    //         push();
    //         sizeItUp = sin(frameCount * 0.05) * 5; // Use sine function for animation
    //         if (sizeItUp < 0) {
    //             sizeItUp += 1;
    //         }
    //         if (sizeItUp > 5) {
    //             sizeItUp -= 1;
    //         }
    //         text(justsometext, (j * 32) + 20, (i * 15) + 400, 20, 20)
    //         pop();
    //     }
    // }

    // for (var i = 0; i < textarr.length; i++) {
    //     for (var j = 0; j < textarr.length; j++) {
    //         a = textarr[i][j];
    //         if (a === 1) {
    //             fill(255,0,128);
    //             justsometext = 'to';
    //         } else if (a === 2) {
    //             fill(255,0,0);
    //             justsometext = 'SJSU';
    //         } else if (a === 3) {
    //             fill(0);
    //             justsometext = 'spar';
    //         } else if (a === 4) {
    //             fill(13,200,20);
    //             justsometext = 'grad';
    //         } else {
    //             fill(0,128,255);
    //             justsometext = 'May';
    //         }

    //         textAlign(CENTER, CENTER);
    //         textFont(myFont);
    //         textSize(12);

    //         // fill(0);
            
    //         push();
    //         sizeItUp = sin(frameCount * 0.05) * 5; // Use sine function for animation
    //         if (sizeItUp < 0) {
    //             sizeItUp += 1;
    //         }
    //         if (sizeItUp > 5) {
    //             sizeItUp -= 1;
    //         }
    //         text(justsometext, (j * 32) + 20, (i * 15) + 400, 20, 20)
    //         pop();
    //     }
    // }

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