function setup() {
  createCanvas(720, 200);
}

function draw() {
  if (keyIsPressed === true) {
    if(key === 'a')
    background(0,0,255);
    } else {
    background(255,0,0);
    }
}
