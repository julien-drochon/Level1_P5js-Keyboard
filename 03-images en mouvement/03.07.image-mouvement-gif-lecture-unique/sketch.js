/*
Télécharger la bibliothèque p5.gif.js :
https://github.com/antiboredom/p5.gif.js/tree/master

Cet exemple ne fonctionne que lorsque qu'il est lancé à partir d'un serveur (mamp ou bracket live preview)

gif = loadGif(image) loads up a gif and returns a p5Image object with some extra functionality. Warning: loadGif only works with locally hosted gifs.

gif.play() plays the gif (it will start playing by default)

gif.pause() pauses the gif

gif.playing() returns true or false depending on if the gif is currently playing

gif.loaded() returns true or false depending on if the gif has loaded

gif.frames() returns the frames as an array of image data

gif.frame([n]) with no argument, returns the current frame. With an integer as an argument, skips to that frame.

totalFrames() returns the total number of frames in the gif

loadGif() will return a modified p5Image object, so you can also use any of the p5Image functions like loadPixels(), filter() or blend().
*/


var gif;

function setup() {
  createCanvas(700, 300); // dimensions du canvas
  gif = loadGif('assets/lets-get-real-once.gif'); // je charge le fichier gif animé sorry.gif à partir du dossier assets
}
function draw() {
  background(0); // je détermine la couleur d'airrière-plan noire
  image(gif, 0, 0, 300, 200); // je positionne l'affichage du gif aux coordonnées x = 0 et y = 0 et redimensionné largeur = 200 et hauteur = 200
}
