var fontRegular, fontItalic, fontBold;
function preload() {
   fontLight = loadFont("assets/FiraSans-Light.ttf");
}
function setup() {
    createCanvas(800,600);
   background(210);
   textFont(fontLight);
   textSize(16);
textAlign(RIGHT);
text("ABCD", 50, 30);
textAlign(CENTER);
text("EFGH", 50, 50);
textAlign(LEFT);
text("IJKL", 50, 70);
}