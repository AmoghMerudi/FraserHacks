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
  text1 = text("Education", windowWidth/2, windowHeight/2)
  textSize(25);
  text2 = text("Made by: 2 browns and 2 yellows", widthWidth / 2, (windowHeight / 2) - 100);
  
  pop();
}

function drawCharacter() {

  box = new Player(200, 0, 20, windowWidth-20, windowHeight-1000);

}

