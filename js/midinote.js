var midiNote = midiNote || {};

midiNote.getVexFlowContext = function() {
    const vexflowdiv = document.getElementById("maindiv");
    const renderer = new Vex.Flow.Renderer(vexflowdiv, Vex.Flow.Renderer.Backends.SVG);
    renderer.resize(1000, 1000);
    return context = renderer.getContext();
}

midiNote.setKeySignature = function(clef, y) {
    const bar1 = new Vex.Flow.Stave(0, y, 500);
    bar1.addClef(clef);
    bar1.addTimeSignature("4/4");
    bar1.addKeySignature("Eb")
    bar1.setContext(context).draw();
    return bar1
}

midiNote.addBeamsToBar = function(bar, clef, tickables){
    var trebleNotesBar1Beam1 = [
        new Vex.Flow.StaveNote({clef: "treble", keys: ["e/4"], duration: "8" }),
        new Vex.Flow.StaveNote({clef: "treble", keys: ["f/4"], duration: "8" }),
        new Vex.Flow.StaveNote({clef: "treble", keys: ["g/4"], duration: "8" }),
        new Vex.Flow.StaveNote({clef: "treble", keys: ["b/4"], duration: "8" }),
    ];

   /* let beams = [];
    tickables.forEach(
        beams.add new Vex.Flow.StaveNote({clef: "treble", keys: ["e/4"], duration: "8" })
    )
      //  tickable in tickables{
    // to do forEach tickable in tickables call Vex.Flow.StaveNote and add to beams array
    */}
