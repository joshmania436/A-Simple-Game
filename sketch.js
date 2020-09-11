gameState=1
/*
function preload() {
    laserSound = loadSound('soundeffects/laser.ogg');
    bgSound = loadSound('soundeffects/background.mp3');
}

*/

function setup() {
    createCanvas(1367, 800);
    p = createVector(width / 2, height / 2)
    pVel = createVector(0, 0);
    force = createVector(0, 0);
    size = 10;
    heading = 0;
    boostColor = color(0, 255, 0);
    playerColor = color(255);
    Score = 0;
    Health = 200;
    bb = [];
    bbVel = [];
    bbSize = 25;

    for (var i = 0; i < 30; i++) {
        bb.push(createVector(random(0, width), random(0, height)));
        bbVel.push(p5.Vector.random2D().mult(random(0.25, 2.25)));
    }
}

function draw() {
    background("crimson");

    if(Health==0){
      //  deathSound.play()
  
      text('YOU LOST!',500,500)
      text('Reload the page and try again',520,520)
        updatePlayer.destroy()
        updateBubbles.destroy()
        updateLasers.destroy()
    }

    if(gameState===1){
        //bgSound.play()
        fill("white");
    text("Use arrow keys to move",30,50);
    text("Use SpaceBar to shoot lasers",30,70);
    text("Boost the volume",30,90);


    }


    updatePlayer();
    updateBubbles();
    updateLasers();

}