var mavideo;

function preload() {
  mavideo = createVideo(['assets/julian_glander_street_demon.mp4', 'assets/julian_glander_street_demon.webm']);
}

function setup() {
createCanvas(400, 400);


  mavideo.hide();
  mavideo.loop();
}

function draw() {
  background(127);

if (keyIsPressed === true) {
  if (key === 'a'){
  image(mavideo, 0, 0, 400, 250);
}
}

}

function keyPressed(){
  mavideo.play();
}

function keyReleased() {
  mavideo.stop();
}
