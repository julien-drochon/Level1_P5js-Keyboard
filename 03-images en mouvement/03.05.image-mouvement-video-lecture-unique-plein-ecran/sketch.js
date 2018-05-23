//https://p5js.org/examples/dom-video-canvas.html

var mavideo; // déclaration de la variable mavideo
function preload() {
  // specify multiple formats for different browsers
  mavideo = createVideo(['assets/power_of_ten_01.mp4', 'assets/power_of_ten_01.webm',  'assets/power_of_ten_01.ggg']);

}
function setup() {
    createCanvas(windowWidth, windowHeight);
    mavideo.hide(); // by default video shows up in separate dom
                  // element. hide it and draw it to the canvas
                  // instead
    mavideo.play();
}

function draw() {
  background(150);
  image(mavideo,0,0,windowWidth, mavideo.height*windowWidth/mavideo.width); // afficher la video nommée mavideo à la position x = 10 et y = 30
}

//Nous allons devoir utiliser cette fonction, mousepressed, qui 'écoute' quand un usager clique sur les boutons de la souris ou du trackpad. Les navigateurs web empechent les programme javascript de se mettre en plein écran au chargment de la page.
function mousePressed() {
    fullscreen(true);//activation du mode plein écran
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}
