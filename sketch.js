let damageCounter;
let healthCounter;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  
  box = new Player(healthCounter, damageCounter, 20, windowWidth-20, windowHeight-1000);

  push();

  textSize(100);
  textAlign(CENTER);
  education = text("Education", windowWidth/2, windowHeight/2)
  
  pop();



  fill(35);
  rect(windowWidth, windowHeight, windowWidth, windowHeight);
  
}

