let triangles = []; // Array to store draggable triangles - Code by Vince Chen

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

    // Draw draggable triangles - Code by Vince Chen
    for (let t of triangles) {
        fill(t.color[0], t.color[1], t.color[2], t.alpha); // Set fill color with alpha
        triangle(t.x1, t.y1, t.x2, t.y2, t.x3, t.y3); // Draw triangle
        t.alpha -= 1; // Decrease alpha value
        if (t.alpha <= 0) {
            // Remove triangle if alpha reaches 0
            triangles.splice(triangles.indexOf(t), 1);
        }
    
    let y1 = mouseY;
    
    if (mouseX < 550)  {
        for (let i = 0; i < mouseX; i += 20) {
        let r1 = random(0, 50, 50);
        fill(r1);
        rect( i+5, y1, 50, 20 );
        console.log("r1 = " + r1);
        }
    }

    if (mouseX > 500)  {
        let mx = mouseX;
        for (let i = 0; i < mouseX; i += 20) {
        let r2 = random(50,255);
        fill(r2,30);
        rect( mx, i+5, 50, 20 );
        console.log("r2 = " + r2);
        }
    }
    }
}

function mouseDragged() {
    if (mouseX < width && mouseY < height)  {
      let x1 = random(width); // Random x-coordinate for the first point
      let y1 = random(height); // Random y-coordinate for the first point
      let x2 = random(width); // Random x-coordinate for the second point
      let y2 = random(height); // Random y-coordinate for the second point
      let x3 = random(width); // Random x-coordinate for the third point
      let y3 = random(height); // Random y-coordinate for the third point
      let color = [255, 0, 0]; // Fill color for the triangle
      let alpha = 100; // Initial alpha value
      let triangleObj = { x1, y1, x2, y2, x3, y3, color, alpha };
      triangles.push(triangleObj); // Add triangle to array
      
    
    }
  }