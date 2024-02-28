let soundFx, button1, button2, button3, button4;
let delaySlider, fbSlider, distSlider;

let sounds = new Tone.Players({
  'fireworks': "Sound/FireworksSound.mp3",
  'fire': "Sound/Firesound.mp3",
  'aircraft': "Sound/AircraftSound.mp3",
  'racecar': "Sound/RaceCarSound.mp3"
});
let delAmt = new Tone.FeedbackDelay("8n", 0.5);
let distAmt = new Tone.Distortion(0.5);

let soundNames = ['fireworks', 'fire', 'aircraft', 'racecar'];
let buttons = [];
sounds.connect(delAmt);
delAmt.connect(distAmt);
distAmt.toDestination();



function setup() {
  createCanvas(500, 600); // Increased canvas height to accommodate the sliders
  
  // Set background color to black
  background(0);

  // Centered text with white color
  textAlign(CENTER);
  fill(255);

  soundNames.forEach((names,index) =>{
    buttons[index] = createButton(names);
    buttons[index].position(120,100 + index * 50);
    buttons[index].mousePressed(() => sounds.player(names).start())
  }
  
  )
  // Adjusted positions for sliders and their labels
  let sliderY = 350; // Common Y position for sliders
  let labelY = 370; // Common Y position for labels

  delaySlider = createSlider(0, 1, 0, 0.1);
  delaySlider.position(width / 2 - 70, sliderY);
  text('Delay Slider', width / 2, labelY - 25);
  delaySlider.mouseMoved(() => delAmt.delayTime.value = delaySlider.value());

  distSlider = createSlider(0, 1, 0, 0.05);
  distSlider.position(width / 2 - 70, sliderY - 100);
  text('Distortion Slider', width / 2, labelY - 120);
  distSlider.mouseMoved(() => distAmt.distortion = distSlider.value());
}

function draw() {
  // All other code was handled in the other functions.
}

