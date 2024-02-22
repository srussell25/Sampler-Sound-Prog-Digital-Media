let soundFx, button1, button2;

function preload(){
  soundFx = new Tone.Players({
    fireworks : "Sound/Fire sound.mp3",//go back and change if it doesn't work
    fire: "Sound/Fireworks sound.mpe"
  }).toDestination(); //tells your audio to go to your speakers
}

function keyPressed(){
  if(key === 'w'){
    soundFx.player('fireworks').start();
  }
  else if(key === 'f'){
    soundFx.player('fire').start();
  }
}


function setup() {
  createCanvas(400, 400);
  button1 = createButton('Fireworks Button');
  button1.position(85,150);
  button1.mousePressed(() =>soundFx.player('fireworks').start());

  button2 = createButton('Fire Button');
  button2.position(115,150);
  button2.mousePressed(() =>soundFx.player('fire').start());
}


function draw() {
  background(220);
}
