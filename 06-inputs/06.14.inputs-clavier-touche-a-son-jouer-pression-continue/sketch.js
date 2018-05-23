var monAudio;

function preload() {
  monAudio = createAudio(['assets/lucky_dragons_-_power_melody.mp3']);
}

function setup() {
  createCanvas(600, 600);
}

function draw() {
background(127);
}

function keyPressed(){
  monAudio.play();
}

function keyReleased(){
  monAudio.stop();
}
