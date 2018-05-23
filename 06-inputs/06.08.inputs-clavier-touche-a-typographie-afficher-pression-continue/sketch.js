var fontRegular, fontItalic, fontBold;
var couleurTypo;

function preload() {
   fontRegular = loadFont("assets/PlayfairDisplay-Regular.ttf");
   fontItalic = loadFont("assets/PlayfairDisplay-Italic.ttf");
   fontBlack = loadFont("assets/PlayfairDisplay-Black.ttf");
}
function setup() {
   createCanvas(800, 600);
   textSize(50);
   background(240);
}

function draw() {

}

  function keyPressed(){
      if (keyCode === 65) {
    background(240);
    fill(255,0,0);
    textFont(fontRegular);
    text("Font Style Normal", 14, 60);
    textFont(fontItalic);
    text("Font Style Italic", 14, 120);
    textFont(fontBlack);
    text("Font Style Black", 14, 180);
  }
}

function keyReleased(){
    background(240);
}