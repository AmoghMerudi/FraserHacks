let damageCounter;
let healthCounter;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);

  push();

  textSize(100);
  textAlign(CENTER);
  text1 = text("Education", windowWidth/2, windowHeight/2)
  textSize(25);
  text2 = text("Made by: 2 browns and 2 yellows", widthWidth / 2, (windowHeight / 2) - 100);
  
  pop();

  push();
  fill(144, 238, 144);
  let platform = rect(0, windowHeight - 150, windowWidth, windowHeight);
  pop();
  
}