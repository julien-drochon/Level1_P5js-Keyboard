//https://p5js.org/examples/dom-video-canvas.html

var mavideo; // déclaration de la variable mavideo

var moncanvas; // déclaration d la variable moncanvas

function preload() {
  // specifier les differents formats de fichiers videos
  //pour qu'ils fonctionnent dans les differents navigateurs
  mavideo = createVideo(['assets/david-o-reilly-bomb.mp4', 'assets/david-o-reilly-bomb.webm']);

}
//fonction personnalisée qui va permettre de centrer le canvas
function centerCanvas() {
    var x = (windowWidth - width) / 2; // variable pour centrer le canvas dans la page horizontalement
    var y = (windowHeight - height) / 2; // variable pour centrer le canvas dans la page hverticalament
    moncanvas.position(x, y); // on centre le canvas
}

function setup() {
     moncanvas = createCanvas(660, 380); // assignation des parametres à la variable moncanvas
    centerCanvas(); // appel de la fonction créée par nos soins pour centrer le canvas dans la page

    mavideo.hide(); // HAck pour afficher la video dans le canvas
    mavideo.loop(); // lancement de la lecture en boucle
}

function draw() {
  background(150); // couleur d'arriere-plan en niveau de gris
  image(mavideo,(width-mavideo.width/2)/2,(height-mavideo.height/2)/2, 640, 360); // afficher la video nommée mavideo à la position centrale du canvas
}

//fonction pour adapter la dimension du canvas à chaque redimmensionnement de fenêtre du navigateur
function windowResized() {
  centerCanvas();
}
