/*
Télécharger la bibliothèque p5.gif.js :
https://github.com/antiboredom/p5.gif.js/tree/master
*/


var gif;

function preload(){
    
  gif = loadGif('assets/sorry.gif');
}

function setup() {
  createCanvas(700, 300);
  
}

function draw() {
  background(0);
    if (keyIsPressed === true) {
    if(key === 'a' && gif.playing() === true)
    {
   image(gif, 0, 0);
}
}
}

function keyPressed(){
 gif.frame(0);
}

function keyReleased(){
    gif.stop();
     gif.frame(0); 
}
