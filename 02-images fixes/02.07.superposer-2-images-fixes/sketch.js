var monImage, monImage01;  // Declaration des variables monImage et monImage01

function setup() {
  createCanvas(720, 573); // détermination de la taille du canvas, c'est à dire la surface de travail : largeur 720 px, hauteur 573 px
    monImage = loadImage("assets/thomas_ruff.jpg");  // chargement de l'image thomas_ruff.jpg à partir du dossier assets
    monImage01 = loadImage("assets/typo.png");  // chargement de l'image typo.png à partir du dossier assets
}

function draw() {
  // Affichage de l'image à la position x = 0 et y = 0
  image(monImage, 0, 0); // l'image de 'dessous'
  image(monImage01, 0, 0); // image de 'dessus'
}
