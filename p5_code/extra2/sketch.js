function setup() {
    createCanvas(600,600);
    background(0);
    noStroke();
}


function draw() {
    background(0);

    let now = new Date();
    let day = now.toLocaleDateString('en-US', { weekday: 'long', });
    let date = now.toLocaleDateString('en-US', { day: 'numeric', month: 'long', year: 'numeric' });
    let time = now.toLocaleTimeString('en-US', { hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true });

    let timeYork = now.toLocaleTimeString('en-US', { hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true, timeZone: 'America/New_York' });
    let timeCali = now.toLocaleTimeString('en-US', { hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true, timeZone: 'America/Los_Angeles' });
    let timeEuro = now.toLocaleTimeString('en-US', { hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true, timeZone: 'Europe/Berlin' });
    let timeJap = now.toLocaleTimeString('en-US', { hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true, timeZone: 'Asia/Tokyo' });
    let timeTaw = now.toLocaleTimeString('en-US', { hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true, timeZone: 'Asia/Taipei' });
    let timeHawaii = now.toLocaleTimeString('en-US', { hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true, timeZone: 'Pacific/Honolulu' });
    let timeTex = now.toLocaleTimeString('en-US', { hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true, timeZone: 'America/Chicago' });

    fill(255);
    textAlign(CENTER);
    textSize(40);
    text(`${day}, ${date}`,width/2,250);

    textSize(40);
    text(time,width/2,330);

    fill(255);
    textAlign(LEFT);
    textSize(30);
    text('Honolulu, USA',50,400);
    text('San Jose, USA',50,430);
    text('Houston, USA',50,460);
    text('New York, USA',50,490);
    text('Berlin, Germany',50,520);
    text('Taipei, Taiwan',50,550);
    text('Tokyo, Japan',50,580);

    text(timeHawaii,330,400);
    text(timeCali,330,430);
    text(timeTex,330,460);
    text(timeYork,330,490);
    text(timeEuro,330,520);
    text(timeTaw,330,550);
    text(timeJap,330,580);
}