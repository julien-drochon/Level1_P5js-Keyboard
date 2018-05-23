var monImage;  // déclaration de la variable monImage
var moncanvas; // déclaration d la variable moncanvas
var nombrehasard; // déclaration d la variable moncanvas

//fonction personnalisée qui va permettre de centrer
function centerCanvas() {
    var x = (windowWidth - width) / 2;
    var y = (windowHeight - height) / 2;
    moncanvas.position(x, y);
}

function setup() {
    moncanvas = createCanvas(800, 600); // détermination de la taille du canvas, c'est à dire la surface de travail : largeur 800 px, hauteur 600 px
    centerCanvas(); // appel de la fonction créée par nos soins pour centrer le canvas dans la page
    background(250); // couleur d'arrière plan gris très léger
    nombrehasard = int(random(0, 4)); //on créée un nombre au hasard entre 0 et 4
    monImage = loadImage("assets/ruff-0"+nombrehasard+".jpg");  // on change le nom de l'image appelée en fonction de la variable nombrehasard
}

function draw() {
    // Affichage de l'image à la position x = centre de la largeur du canvas moins la moitié de la largeur de l'image et y = centre de la hauteur du canvas moins la moitié de la hauteur de l'image
    image(monImage, (width-monImage.width)/2, (height-monImage.height)/2);
}

//fonction pour adapter la dimension du canvas à chaque redimmensionnement de fenêtre du navigateur
function windowResized() {
  centerCanvas();
}