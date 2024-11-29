let damageCounter;
let healthCounter;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function drawBackground() {
  background(220);

  push();

  textSize(100);
  textAlign(CENTER);
  education = text("Education", windowWidth/2, windowHeight/2)
  
  pop();
}

function drawCharacter() {

  box = new Player(200, 0, 20, windowWidth-20, windowHeight-1000);

}

