function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  
  box = rect(200,200, 20, 20);

  push();

  textSize();
  education = text("Education", windowWidth/2, windowHeight/2);

  pop();

}
