function setup() {
    createCanvas(900,500); // canvas size
    background(0, 100, 100); // background color
    noStroke();
}


function draw() {
    let mom = mouseX;
    let dad = mouseY;
    if (mom < width/2) {
        for (let i = 0; i < 900; i += 20) {
            for (let j = 0; j < 500; j += 20) {
                rand = random(0,255);
                rand2 = random(0,255);
                rand3 = random(0,255);
                fill(rand,rand2,rand3);
                rect( i+5, j+5, 10, 10 );
                console.log("R: " + rand + ",", "G: " + rand2 + ",", "B: " + rand3);
            }
        }
    } else {
        for (let i = 0; i < mouseX; i += 20) {
            rand4 = random(100);
            rand5 = random(255);
            fill(0,120,255,rand4);
            ellipse(mom+530,dad,50,50);
            // console.log("r3 = " + rand4);
           }
    
        fill(0,120,255,50);
        ellipse(mom,dad,50,50);
        console.log("The party has been turned off.");
    }

    if (dad > height/2) {
        if (mom > width/2) {
            for (let i = 0; i < mouseX; i += 20) {
            rand4 = random(100);
            rand5 = random(255);
            fill(200,120,30,rand4);
            rect(mom+530,dad,50,50);
            // console.log("r3 = " + rand4);
           }
    
        fill(200,120,30,50);
        rect(mom+70,dad-100,75,75);
        console.log("The party has been turned off.");
        }

    }
}