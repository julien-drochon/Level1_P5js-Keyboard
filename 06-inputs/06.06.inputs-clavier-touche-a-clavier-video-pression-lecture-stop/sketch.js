// pour connaitre la valeur de keycode correspondant à la frappe du clavier : http://keycode.info/
// dnas le navigateur chrome, besoin de passer par Mamp ou Brackets live preview pour que cet exemple fonctionne

var mavideo01;
var trigger = false;

function preload() {
  mavideo = createVideo(['assets/david-o-reilly-bomb.mp4', 'assets/david-o-reilly-bomb.webm']);
}

function setup() {
  createCanvas(600, 300);
  mavideo.hide();
}

function draw() {
      background(0,0,255);

  if (trigger) {
      image(mavideo,0,0, 600, 300);
}
}

function keyPressed(){
    if(keyCode === 65)
    { // touche 'a'
  trigger= !trigger;
    }

    if(trigger){ // déclencheur
      mavideo.play();
    }else{
      mavideo.stop();
    }
}

function keyReleased(){
  // mavideo.volume(0);
// mavideo.stop();
}
