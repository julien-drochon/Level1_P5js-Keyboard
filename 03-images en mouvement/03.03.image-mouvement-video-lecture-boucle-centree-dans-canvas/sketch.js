//https://p5js.org/examples/dom-video-canvas.html

var mavideo; // déclaration de la variable mavideo

function preload(){
  // specifier les differents formats de fichiers videos
  //pour qu'ils fonctionnent dans les differents navigateurs
  mavideo = createVideo(['assets/david-o-reilly-mirror.mp4', 'assets/david-o-reilly-mirror.webm']);
}

function setup() {
    createCanvas(660, 380); // taille du canvas
    mavideo.hide(); // Hack pour afficher la video dans le canvas
    mavideo.loop(); // jouer la video en boucle
}

function draw() {
  background(150);
  image(mavideo,(width-mavideo.width/2)/2,(height-mavideo.height/2)/2, 640, 360); // afficher la video nommée mavideo à la position centrale du canvas
}
