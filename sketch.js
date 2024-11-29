let damageCounter;
let healthCounter;

function setup() {
  createCanvas(windowWidth, windowHeight);
  player();
}

function draw() {
  background(220);

  push();

  textSize(100);
  textAlign(CENTER);
  education = text("Education", windowWidth/2, windowHeight/2)
  
  pop();

  push();
  fill(144, 238, 144);
  let platform = rect(0, windowHeight - 150, windowWidth, windowHeight);
  pop();
  
}

function player(){
    let player = rect(0, 0, 50, 50);
}