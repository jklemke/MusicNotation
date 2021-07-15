const vexFlowContext = midiNote.getVexFlowContext();

const trebleBar1 = midiNote.setKeySignature("treble", 40);
const bassBar1 = midiNote.setKeySignature("bass", 120);

var trebleNotesBar1Beam1 = [
    new Vex.Flow.StaveNote({clef: "treble", keys: ["e/4"], duration: "8" }),
    new Vex.Flow.StaveNote({clef: "treble", keys: ["f/4"], duration: "8" }),
    new Vex.Flow.StaveNote({clef: "treble", keys: ["g/4"], duration: "8" }),
    new Vex.Flow.StaveNote({clef: "treble", keys: ["b/4"], duration: "8" }),
];

var trebleNotesBar1Beam2 = [
    new Vex.Flow.StaveNote({clef: "treble", keys: ["e/4"], duration: "8" }),
    new Vex.Flow.StaveNote({clef: "treble", keys: ["f/4"], duration: "8" }),
    new Vex.Flow.StaveNote({clef: "treble", keys: ["d/4"], duration: "8" }),
    new Vex.Flow.StaveNote({clef: "treble", keys: ["e/4"], duration: "8" }),
];

bar1Beams = [
    new Vex.Flow.Beam(trebleNotesBar1Beam1),
    new Vex.Flow.Beam(trebleNotesBar1Beam2)
]

var voice = new Vex.Flow.Voice({num_beats: 4, beat_value: 4});
voice.addTickables(trebleNotesBar1Beam1);
voice.addTickables(trebleNotesBar1Beam2);
const allNotes = trebleNotesBar1Beam1.concat(trebleNotesBar1Beam2)
Vex.Flow.Formatter.FormatAndDraw(context, trebleBar1, allNotes)
bar1Beams.forEach(function(b) {b.setContext(context).draw()})

var bassNotes = [
    new Vex.Flow.StaveNote({clef: "bass", keys: ["e/2", "e/3"], duration: "h" }),
    new Vex.Flow.StaveNote({clef: "bass", keys: ["e/2", "d/3"], duration: "h" }),
];

var voice = new Vex.Flow.Voice({num_beats: 4, beat_value: 4});
voice.addTickables(bassNotes);
Vex.Flow.Formatter.FormatAndDraw(context, bassBar1, bassNotes)

//bar 2
const trebleStave2 = new Vex.Flow.Stave(
    trebleBar1.width + trebleBar1.x,
 //   500,
    40,
    300
);
trebleStave2.setContext(context).draw();

var trebleNotesBar2Beam1 = [
new Vex.Flow.StaveNote({clef: "treble", keys: ["e/4"], duration: "w" })
];

var voice = new Vex.Flow.Voice({num_beats: 4, beat_value: 4});
voice.addTickables(trebleNotesBar2Beam1);
Vex.Flow.Formatter.FormatAndDraw(context, trebleStave2, trebleNotesBar2Beam1)

//bass
const bassStave2 = new Vex.Flow.Stave(
    bassBar1.width + bassBar1.x,
   // 500,
    120,
    300
);

bassStave2.setContext(context).draw();

var bassNotes2 = [
new Vex.Flow.StaveNote({clef: "bass", keys: ["e/3"], duration: "w" })
];

var voice = new Vex.Flow.Voice({num_beats: 4, beat_value: 4});
voice.addTickables(bassNotes2);
Vex.Flow.Formatter.FormatAndDraw(context, bassStave2, bassNotes2)
