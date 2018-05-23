//---- fonctions utilisées
//https://p5js.org/reference/#/p5/loadImage
//https://p5js.org/reference/#/p5/image

var monImage;  // Declaration de la variable monImage

function setup() {
    createCanvas(800, 600); // détermination de la taille du canvas, c'est à dire la surface de travail : largeur 800 px, hauteur 573 px
    monImage = loadImage("assets/hello.gif");  // chargement de l'image hello.gif à partir du dossier assets
    background(127); // arrière-plan gris moyen
}

function draw() {
    // Affichage de l'image à la position x = 0 et y = 0
    image(monImage, 0, 0);
}
