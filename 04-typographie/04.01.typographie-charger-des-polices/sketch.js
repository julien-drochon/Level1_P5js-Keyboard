var fontRegular, fontItalic, fontBold;
function preload() {
   fontRegular = loadFont("assets/PlayfairDisplay-Regular.ttf");
   fontItalic = loadFont("assets/PlayfairDisplay-Italic.ttf");
   fontBlack = loadFont("assets/PlayfairDisplay-Black.ttf");
}
function setup() {
   createCanvas(800, 600);
}

function draw() {
   background(210);
   textSize(50);
   textFont(fontRegular);
   text("Font Style Normal", 14, 60);
   textFont(fontItalic);
   text("Font Style Italic", 14, 120);
   textFont(fontBlack);
   text("Font Style Black", 14, 180);
}
