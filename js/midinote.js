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

midiNote.createNoteArray = function(clef, tones){
    let noteArray = [];
    for (let i = 0; i < tones.length; i++) {
         noteArray.push(
            new Vex.Flow.StaveNote({clef: clef, keys: tones[i].value, duration: tones[i].duration })
        )
    }

    return noteArray
}