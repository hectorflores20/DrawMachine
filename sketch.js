
let noiseOffset = 0.0;
let strokeWight = 5;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(220);



}

function draw() {
  background(220, 50, 133, 5);
  strokeWight(strokeWight);

  noiseOffset = noiseOffset + 0.01;
  stokeWeight = noise(noiseOffset) * 10;

    stroke(map(mouseX, 0, 600, 0, 255, true))
    line(width - mouseX, height - mouseY, width - pmouseX, height - pmouseY);
    line(mouseX, mouseY, pmouseX, pmouseY);
  }
}
