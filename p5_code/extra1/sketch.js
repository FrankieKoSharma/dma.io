function setup() {
    createCanvas(600,600);
    background(255);
    textSize(30);
    textFont('Arial');
    noStroke();
}


function draw() {
    let currentTime = millis(); // inserts time function onto the program
    let isRed = (Math.floor(currentTime / 1000) % 2 === 0); // allows the on/off toggle to function every second
    let changingcolor = isRed ? color(255, 0, 0) : color(0); // defines what colors are being changed to every second

    fill(changingcolor);
    rect(20,20,10,10);
    rect(50,50,30,30);
    rect(130,130,40,40);
    rect(200,200,50,50);
    text("Black to Red Toggle, here we go!",50,400);
}