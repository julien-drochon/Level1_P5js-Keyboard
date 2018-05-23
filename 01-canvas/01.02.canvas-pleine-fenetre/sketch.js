//---- fonctions utilisées
//https://p5js.org/reference/#/p5/windowResized

function setup() {
  createCanvas(windowWidth, windowHeight); // détermination de la taille du canvas, c'est à dire la surface de travail : windowWidth -> la largeur correspond à la largeur de la fenêtre du navigateur, windowHeight -> la hauteur correspond à la hauteur de la fenêtre du navigateur
   background (0,0,255); // couleur d'aière-plan bleu. la fonction background a les paramètres suivants : background(rouge, vert, bleu). rouge : une valeur entre 0 et 255, bleu : une valeur entre 0 et 255, vert : une valeur entre 0 et 255
}

function draw() {  
}

//fonction pour adapter la dimension du canvas à chaque redimmensionnement de fenêtre du navigateur
function windowResized() {
   resizeCanvas(windowWidth, windowHeight);
}