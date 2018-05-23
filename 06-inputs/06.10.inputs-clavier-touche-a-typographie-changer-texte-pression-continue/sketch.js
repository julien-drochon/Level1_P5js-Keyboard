var fontRegular, fontItalic, fontBold;
var texte;

function preload() {
   fontRegular = loadFont("assets/PlayfairDisplay-Regular.ttf");
   fontItalic = loadFont("assets/PlayfairDisplay-Italic.ttf");
   fontBlack = loadFont("assets/PlayfairDisplay-Black.ttf");
}
function setup() {
   createCanvas(800, 600);
   textSize(50);
   background(240);
    texte = "Hello !";
}

function draw() {
    background(240);
    fill(0,0,255);
    textFont(fontRegular);
    text(texte, 14, 60);
    textFont(fontItalic);
    text(texte, 14, 120);
    textFont(fontBlack);
    text(texte, 14, 180);
}

function keyPressed(){
    if (keyCode === 65) {
    texte = "Hello World !";
    }
}

function keyReleased(){
   texte = "Hello !";
}