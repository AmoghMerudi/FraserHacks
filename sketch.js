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

  push();
  fill(144, 238, 144);
  rect(0, windowHeight/1.5, windowWidth, windowHeight);
  pop();
  
}

class Player{
  constructor(health, damage, xPosition, yPosition, width, height){
      this.health = health;
      this.damage = damage;
      this.xPosition = xPosition;
      this.yPosition = yPosition;
      this.width = width;
      this.height = height;

  }
}

