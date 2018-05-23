// pour connaitre la valeur de keycode correspondant à la frappe du clavier : http://keycode.info/
// appuyer sur la touche a pour lancer la video 1, la touche b pour la video 2

var mavideo01, mavideo02;
var triggerA = false, triggerB = false;

function preload() {
  mavideo01 = createVideo(['assets/david-o-reilly-bomb.mp4', 'assets/david-o-reilly-bomb.webm']);
    mavideo02 = createVideo(['assets/julian-glander-nature-movie.mp4','assets/julian-glander-nature-movie.webm']);
}

function setup() {
  createCanvas(600, 300);
  mavideo01.hide();
  mavideo01.onended(finDeVideo); // à la fin de la lecture de la video lancer la fonction finDeVideo
  mavideo02.hide();
  mavideo02.onended(finDeVideo); // à la fin de la lecture de la video lancer la fonction finDeVideo
}

function draw() {
      background(0,0,255);

  if (triggerA) {
      image(mavideo01,0,0, 600, 300);
}
  if (triggerB) {
      image(mavideo02,0,0, 600, 300);
}
}

function keyPressed(){

  // ----------          Video 1 / Touche 'a'
    if(keyCode === 65) // 65 -> touche 'a'
    {
      triggerA = true;
      triggerB = false;
      mavideo02.stop();
    }
    if(triggerA){ // déclencheur
      mavideo01.play();
    }else{
      mavideo01.stop();
    }
    // ----------          Video 2 / Touche 'b'
        if(keyCode === 66) // 66 -> touche 'b'
    {
      triggerA = false;
      triggerB = true;
      mavideo01.stop();
    }
    if(triggerB){ // déclencheur
      mavideo02.play();
    }else{
      mavideo02.stop();
    }

}

function finDeVideo() {
  //alert('done playing ' );
  triggerA = false;
  triggerB = false;
}
