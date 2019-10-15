

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(200, 50, 133);

  strokeWeight(5);

}

function draw() {

  if (mouseIsPressed){
    stroke(map(mouseX, 0, 600, 0, 255, true))
    line(width - mouseX, height - mouseY, width - pmouseX, height - pmouseY);
    line(mouseX, mouseY, pmouseX, pmouseY);
  }

}

function keyTyped(){

  if (key === 's'){
    // save this images
    saveCanvas('fileName', 'png');
  } else if (key === 'd'){
    // clear the image
    clear();

  }

  return false;

}
