//---- fonctions utilisées
//https://p5js.org/reference/#/p5/loadImage
//https://p5js.org/reference/#/p5/image

var monImage;  // Declaration de la variable monImage
var moncanvas; // déclaration d la variable moncanvas

function setup() {
    moncanvas = createCanvas(800, 600); // détermination de la taille du canvas, c'est à dire la surface de travail : largeur 800 px, hauteur 573 px
    monImage = loadImage("assets/thomas_ruff.jpg");  // chargement de l'image thomas_ruff.jpg à partir du dossier assets
    background(0); // arrière-plan gris moyen
}

function draw() {
    centerCanvas(); // fonction pour centrer le canvas dans la page
    // Affichage de l'image à la position x = centre de la largeur du canvas moins la moitié de la largeur de l'image et y = centre de la hauteur du canvas moins la moitié de la hauteur de l'image
    image(monImage, (width-monImage.width)/2, (height-monImage.height)/2);
}


//fonction personnalisée qui va permettre de centrer
function centerCanvas() {
    var x = (windowWidth - width) / 2;
    var y = (windowHeight - height) / 2;
    moncanvas.position(x, y);
}

//Nous allons devoir utiliser cette fonction, mousepressed, qui 'écoute' quand un usager clique sur les boutons de la souris ou du trackpad. Les navigateurs web empechent les programme javascript de se mettre en plein écran au chargment de la page.
function mousePressed() {
    fullscreen(true);//activation du mode plein écran
}
