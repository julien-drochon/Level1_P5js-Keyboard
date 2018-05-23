//https://p5js.org/reference/#/libraries/p5.sound

var song;

function preload() {
  song = loadSound('assets/lucky_dragons_-_power_melody.mp3');
}
function setup() {
  createCanvas(720, 200);
  background(0,0,255);
  song.loop();
  }
