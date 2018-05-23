//Pour connaitre le keycode correspondant à la frappe du clavier : http://keycode.info/
var monImage01, monImage02, monImage03,monImage04, monImage05, monImage06, monImage07, monImage08, monImage09, monImage10, monImage11, monImage12;

var compteur;

function preload(){

}

function setup() {
  createCanvas(800, 600);
  background(0,0,255);
        monImage01 = loadImage("assets/01.jpg"); 
    monImage02 = loadImage("assets/02.jpg"); 
    monImage03 = loadImage("assets/03.jpg"); 
    monImage04 = loadImage("assets/04.jpg"); 
    monImage05 = loadImage("assets/05.jpg"); 
    monImage06 = loadImage("assets/06.jpg"); 
    monImage07 = loadImage("assets/07.jpg"); 
    monImage08 = loadImage("assets/08.jpg"); 
    monImage09 = loadImage("assets/09.jpg"); 
    monImage10 = loadImage("assets/10.jpg"); 
    monImage11 = loadImage("assets/11.jpg"); 
    monImage12 = loadImage("assets/12.jpg"); 
    
    compteur = 1;
}

function draw() {
    background(0,0,255);
    if(compteur === 1) {
        image(monImage01,0,0);
    }
       if(compteur === 2) {
        image(monImage02,0,0);
    }
       if(compteur === 3) {
        image(monImage03,0,0);
    }
       if(compteur === 4) {
        image(monImage04,0,0);
    }
       if(compteur === 5) {
        image(monImage05,0,0);
    }
       if(compteur === 6) {
        image(monImage06,0,0);
    }
       if(compteur === 7) {
        image(monImage07,0,0);
    }
       if(compteur === 8) {
        image(monImage08,0,0);
    }
       if(compteur === 9) {
        image(monImage09,0,0);
    }
       if(compteur === 10) {
        image(monImage10,0,0);
    }
       if(compteur === 11) {
        image(monImage11,0,0);
    }
       if(compteur === 12) {
        image(monImage12,0,0);
    }
    text(compteur, 20,20);
}

function keyPressed(){
  if (keyCode === 65 ){
      if(compteur < 12 ){
     compteur = compteur + 1;
      }else{
          compteur=1;
      }
    }

}
