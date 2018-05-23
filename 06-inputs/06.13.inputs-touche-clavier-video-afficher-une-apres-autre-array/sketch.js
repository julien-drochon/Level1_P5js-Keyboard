//Pour connaitre le keycode correspondant à la frappe du clavier : http://keycode.info/
var mesVideos = [];

var compteur;

function preload(){
    for (var i = 0; i < 3; i++) {
        mesVideos[i] = createVideo("assets/mark_lewis_0"+i+".mp4");
        mesVideos[i].hide();
        mesVideos[i].loop();
    }
}

function setup() {
  createCanvas(254, 241);
  background(0,0,255);

    compteur = 0;
}

function draw() {
    background(0,0,255);
    image(mesVideos[compteur],0,0);
}

function keyPressed(){
  if (keyCode === 65 ){ // 65 correspond à la touche 'a'
      if(compteur < 3 ){
     compteur = compteur + 1;
      }
      else {
     compteur=0;
      }
    }
}
