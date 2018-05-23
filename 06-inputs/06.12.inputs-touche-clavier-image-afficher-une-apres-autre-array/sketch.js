//Pour connaitre le keycode correspondant à la frappe du clavier : http://keycode.info/
var mesImages = [];

var compteur;

function preload(){

}

function setup() {
  createCanvas(254, 241);
  background(0,0,255);
    for (var i = 0; i < 7; i++) {
        mesImages[i] = loadImage("assets/"+i+".jpg"); 
    }
    compteur = 0;
}

function draw() {
    background(0,0,255);
    image(mesImages[compteur],0,0);
}

function keyPressed(){
  if (keyCode === 65 ){
      if(compteur < 6 ){
     compteur = compteur + 1;
      }
      else {
     compteur=0;
      }
    }
}
