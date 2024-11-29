let damageCounter;
let healthCounter;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  
  box = new player.Player(healthCounter, damageCounter, 20, windowWidth-20, windowHeight-1000);

  push();

  textSize(100);
  textAlign(CENTER);
  education = text("Education", windowWidth/2, windowHeight/2)
  
  pop();



  fill(0);
  rect(0, 0, 200, 200);
  
}


