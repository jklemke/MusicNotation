const vf = new Vex.Flow.Factory({renderer: {elementId: 'maindiv'}});
const score = vf.EasyScore();
const system = vf.System();

system.addStave({
    voices: [score.voice(score.notes('Eb4/8, F4, G4, Bb4, Eb4, F4, D4, Eb4'))]
}).addClef('treble').addTimeSignature('4/4');

system.addStave({
    voices: [score.voice(score.notes('C#5/q, B4, A4, G#4'))]
}).addClef('bass').addTimeSignature('4/4');

system.addConnector();

vf.draw();