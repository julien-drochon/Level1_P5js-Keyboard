var monImage;  // Declaration de la variable monImage
var moncanvas; // déclaration d la variable moncanvas

//fonction personnalisée qui va permettre de centrer
function centerCanvas() {
    var x = (windowWidth - width) / 2;
    var y = (windowHeight - height) / 2;
    moncanvas.position(x, y);
}

function setup() {
    moncanvas = createCanvas(800, 600); // détermination de la taille du canvas, c'est à dire la surface de travail : largeur 504 px, hauteur 252 px. Nous choisissons cette taille, puisqu'elle correspond à la taille de l'imge que nous utilisons
    centerCanvas(); // appel de la fonction créée par nos soins pour centrer le canvas dans la page
    background(250); // couleur d'arrière plan gris très léger
    monImage = createImg("http://davidcampany.com/site/wp-content/uploads/2013/07/2006-RUFTH0605.jpg");  // chargement de l'image thomas_ruff.jpg à partir du dossier assets : voir https://p5js.org/reference/#/p5/createImage
    monImage.hide();
}

function draw() {
    // Affichage de l'image à la position x = centre de la largeur du canvas moins la moitié de la largeur de l'image et y = centre de la hauteur du canvas moins la moitié de la hauteur de l'image
    image(monImage, (width-monImage.elt.width)/2, (height-monImage.elt.height)/2);
}

//fonction pour adapter la dimension du canvas à chaque redimmensionnement de fenêtre du navigateur
function windowResized() {
    centerCanvas();
}