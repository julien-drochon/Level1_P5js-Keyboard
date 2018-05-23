var mavideo, mavideo1, mavideo2, mavideo3;

var   playing1 = false;
var   playing2 = false;
var   playing3 = false;

var moncanvas;

function preload() {
  // specify multiple formats for different browsers
  mavideo = createVideo(["assets/mer.webm"]);
  mavideo1 = createVideo(["assets/haut.webm"]);
  mavideo2 = createVideo(["assets/milieu.webm"]);
  mavideo3 = createVideo(["assets/bas.webm"]);

}
function setup() {
  moncanvas =  createCanvas(405, 720);
    mavideo.hide();
    mavideo1.hide();
    mavideo2.hide();
    mavideo3.hide();
    mavideo.loop();
    frameRate(24);
}

function draw() {
    centerCanvas();

    background(150);
    image(mavideo,0,0);
    image(mavideo1,0,0);
    image(mavideo2,0,0);
    image(mavideo3,0,0);
}

function keyPressed(){
  if (keyCode === 105) {    toggleVid1();  }
  if (keyCode === 100) {    toggleVid2();  }
  if (keyCode === 101) {    toggleVid3();  }
}

function keyReleased()
{
    if (keyCode === 105) {
      toggleVid1();
  }
    if (keyCode ===  100) {
      toggleVid2();
  }
    if (keyCode === 101) {
        toggleVid3();
  }
}

function toggleVid1() {
  if (playing1) {
    mavideo1.time(0);
    mavideo1.pause();
  } else {
    mavideo1.loop();
  }
  playing1 = !playing1;
}

function toggleVid2() {
  if (playing2) {
    mavideo2.time(0);
    mavideo2.pause();
  } else {
    mavideo2.loop();
  }
  playing2 = !playing2;
}

function toggleVid3() {
  if (playing3) {
    mavideo3.time(0);
    mavideo3.pause();
  } else {
    mavideo3.loop();
  }
  playing3 = !playing3;
}

// --- functions centrer dans la page + plein ecran
function mousePressed() {
    fullscreen(true);
    centerCanvas();
}

function centerCanvas() {
    var x = (windowWidth - width) / 2;
    var y = (windowHeight - height) / 2;
    moncanvas.position(x, y);
}
