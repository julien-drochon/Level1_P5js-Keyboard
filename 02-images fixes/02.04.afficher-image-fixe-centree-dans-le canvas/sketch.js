//---- fonctions utilisées
//https://p5js.org/reference/#/p5/width
//https://p5js.org/reference/#/p5/height

var monImage;  // Declaration de la variable monImage

function setup() {
    createCanvas(800, 600); // détermination de la taille du canvas, c'est à dire la surface de travail : largeur 800 px, hauteur 600 px
    background(127); // arrière-plan gris moyen
    monImage = loadImage("assets/thomas-ruff-ib01.jpg");  // chargement de l'image thomas-ruff-ib01.jpg à partir du dossier assets
}

function draw() {
    // Affichage de l'image à la position x = centre de la largeur du canvas moins la moitié de la largeur de l'image et y = centre de la hauteur du canvas moins la moitié de la hauteur de l'image
    image(monImage, (width-monImage.width)/2, (height-monImage.height)/2);
}
