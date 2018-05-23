//https://p5js.org/examples/dom-video-canvas.html

var mavideo; // déclaration de la variable mavideo

function setup() {
    createCanvas(800, 600);
    // specify multiple formats for different browsers
    mavideo = createVideo(['assets/mark-lewis-algonguin-park.mp4']);
    mavideo.hide(); // by default video shows up in separate dom
                  // element. hide it and draw it to the canvas
                  // instead
    mavideo.loop();
}

function draw() {
  background(150);
  image(mavideo,0,0, 640, 360); // afficher la video nommée mavideo à la position x = 10 et y = 30
}
