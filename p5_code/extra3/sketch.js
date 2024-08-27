let character;

function setup() {
  createCanvas(600, 600);
  character = new Person(200, 100, color(215,200,5), 1);
  brother = new Person(400, 233, color(15,200,5), 0.8);
  jr = new Person(1010, 895, color(225,100,5), 0.4);
  noStroke();
}

function draw() {
  background(172,100,0);
  fill(100,60,0);
  rect(0,height/1.5,width,height/3);
  character.display();
  brother.display();
  jr.display();
}