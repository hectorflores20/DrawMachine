let loopBeat;
let bassSynth, cymbalSynth;
let counter;
let amSynth;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0, 128, 128);

  strokeWeight(5);


  counter = 0;

  amSynth = new Tone.AMSynth({
      harmonicity: 1.04, // 3/1
      detune: 0,
      oscillator: {
        type: "sine" //carrier signal
      },
      envelope: {
        attack: 0.0001,
        decay: 0.01,
        sustain: 1,
        release: 0.5
      },
      modulation: {
        type: "square" //modulation signal
      },
      modulationEnvelope: {
        attack: 0.005,
        decay: 0,
        sustain: 1,
        release: 0.5
      }
    }

  ).toMaster();
  bassSynth = new Tone.MembraneSynth().toMaster();
  cymbalSynth = new Tone.MetalSynth({
      frequency: 250,
      envelope: {
        attack: 0.001,
        decay: 0.1,
        release: 0.01
      },
      harmonicity: 3.1,
      modulationIndex: 16,
      resonance: 8000,
      octaves: 0.5
    }

  ).toMaster();

  loopBeat = new Tone.Loop(song, '16n');

  Tone.Transport.bpm.value = 140
  Tone.Transport.start();
  loopBeat.start(0);
}


function draw() {

  if (mouseIsPressed){
    stroke(map(mouseX, 0, 600, 0, 255, true))
    line(width - mouseX, height - mouseY, width - pmouseX, height - pmouseY);
    line(mouseX, mouseY, pmouseX, pmouseY);

  }

}

function keyTyped(){

  if (key === 's'){
    // save this images
    saveCanvas('fileName', 'png');
  } else if (key === 'c'){
    // clear the image
    clear();

  }

  return false;

}

function song(time) {

  if (counter % 4 === 0) {
    bassSynth.triggerAttackRelease('F#1', '8n', time, 1)
  }
  if (counter % 4 !== 1) {

    if (counter === 3 || counter === 12) {
      cymbalSynth.envelope.decay = 0.5;

    } else {
      cymbalSynth.envelope.decay = 0.01;
    }
    cymbalSynth.triggerAttackRelease('32n', time, 0.3);
  }

  if (counter === 0) {
    amSynth.triggerAttackRelease('a2', '16n', time, 1)
  }

  if (counter === 10) {
    amSynth.triggerAttackRelease('Bb1', '16n', time, 1)
  }

  counter = (counter + 1) % 16
}
