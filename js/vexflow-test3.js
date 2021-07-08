const VF = Vex.Flow;
const vexflowdiv = document.getElementById("maindiv");
const renderer = new VF.Renderer(vexflowdiv, VF.Renderer.Backends.SVG);
renderer.resize(1000, 1000);
const context = renderer.getContext();
const trebleStave = new VF.Stave(10, 40, 500);
const bassStave = new VF.Stave(10, 120, 500);

trebleStave.addClef("treble");
trebleStave.addTimeSignature("4/4");
trebleStave.addKeySignature("Eb")
trebleStave.setContext(context).draw();

bassStave.addClef("bass");
bassStave.addTimeSignature("4/4");
bassStave.addKeySignature("Eb");
bassStave.setContext(context).draw();


var trebleNotes1 = [
    new VF.StaveNote({clef: "treble", keys: ["e/4"], duration: "8" }),
    new VF.StaveNote({clef: "treble", keys: ["f/4"], duration: "8" }),
    new VF.StaveNote({clef: "treble", keys: ["g/4"], duration: "8" }),
    new VF.StaveNote({clef: "treble", keys: ["b/4"], duration: "8" }),
];

var trebleNotes2 = [
    new VF.StaveNote({clef: "treble", keys: ["e/4"], duration: "8" }),
    new VF.StaveNote({clef: "treble", keys: ["f/4"], duration: "8" }),
    new VF.StaveNote({clef: "treble", keys: ["d/4"], duration: "8" }),
    new VF.StaveNote({clef: "treble", keys: ["e/4"], duration: "8" }),
];

beams = [
    new VF.Beam(trebleNotes1),
    new VF.Beam(trebleNotes2)
]

var bassNotes = [
    new VF.StaveNote({clef: "bass", keys: ["e/2", "e/3"], duration: "h" }),
    new VF.StaveNote({clef: "bass", keys: ["e/2", "d/3"], duration: "h" }),
];

var voice = new VF.Voice({num_beats: 4, beat_value: 4});
voice.addTickables(trebleNotes1);
voice.addTickables(trebleNotes2);
const allNotes = trebleNotes1.concat(trebleNotes2)
VF.Formatter.FormatAndDraw(context, trebleStave, allNotes)
beams.forEach(function(b) {b.setContext(context).draw()})

var voice = new VF.Voice({num_beats: 4, beat_value: 4});
voice.addTickables(bassNotes);
VF.Formatter.FormatAndDraw(context, bassStave, bassNotes)

//bar 2
const trebleStave2 = VF.Stave(
    trebleStave.width + trebleStave.x,
    200,
    600
);
trebleStave2.setContext(context).draw();

var trebleNotesS2 = [
new VF.StaveNote({clef: "treble", keys: ["e/4"], duration: "w" })
];

var voice = new VF.Voice({num_beats: 4, beat_value: 4});
voice.addTickables(trebleNotesS2);
VF.Formatter.FormatAndDraw(context, trebleStave2, trebleNotesS2)

//bass
const bassStave2 = VF.Stave(
    bassStave.width + bassStave.x,
    200,
    600
);
bassStave2.setContext(context).draw();

var bassNotes2 = [
new VF.StaveNote({clef: "bass", keys: ["e/3"], duration: "w" })
];

var voice = new VF.Voice({num_beats: 4, beat_value: 4});
voice.addTickables(bassNotes2);
VF.Formatter.FormatAndDraw(context, bassStave2, bassNotes2)
