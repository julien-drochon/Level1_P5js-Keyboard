var gif1, gif2;
var moncanvas;


function preload() {
  gif1 = loadGif("assets/hello.gif");
  gif2 = loadGif("assets/welcome.gif");
}

function setup() {
    moncanvas = createCanvas(800, 600);
    centerCanvas();
    frameRate(24);
}

function draw() {
    centerCanvas();
    background(0);
    if(keyIsDown('65')){
       image(gif1,0,0, 800,600);
    }
    else{
       image(gif2,0,0,800,600);
    }
}

function mousePressed() {
    fullscreen(true);//activation du mode plein écran
    centerCanvas();
}

function centerCanvas() {
    var x = (windowWidth - width) / 2;
    var y = (windowHeight - height) / 2;
    moncanvas.position(x, y);
}
