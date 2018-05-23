//https://p5js.org/examples/dom-video-canvas.html

var mavideo; // déclaration de la variable mavideo
function preload() {
  // les différents formats de fichiers videos
  //pour un fonctionnement dans les différents navigateurs
  mavideo = createVideo(['assets/julian_glander_street_demon.mp4', 'assets/julian_glander_street_demon.webm']);
}
function setup() {
    createCanvas(660, 380); // dimensions du canvas
    mavideo.hide(); // hack pour afficher la video dans le canvas
    mavideo.play(); // je lance la lecture de la video
}

function draw() {
  background(150); // arriere plan de couleur grise
  image(mavideo,0,0, 640, 360); // afficher la video nommée mavideo à la position x = 0 et y = 0 et de dimension largeur = 640 et hauteur = 360
}
