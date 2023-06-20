

// given a root note. Output the chromatic notes of the scale with correct sharp or flat notations
// this logic needs to be greatly improved. Incorrect scales can be returned, eg. Db minor scale is wrong. 
// consider restricting to only traditionally used major and minor keys, or allowing any root note selection and use double flats and sharps to maintain all 7 notes A through G within each scale
function getNoteArray(selectedRoot, selectedScale) {

    const SHARP_NOTES = ["A", "A#", "B", "C", "C#", "D", "D#", "E", "F", "F#", "G", "G#"];
    const FLAT_NOTES = ["A", "Bb", "B", "C", "Db", "D", "Eb", "E", "F", "Gb", "G", "Ab"];
    const FLAT_MAJ_KEYS = ["F", "Bb", "Eb", "Ab", "Db", "Gb"];
    const FLAT_MIN_KEYS = ["D", "G", "C", "F", "Bb", "Eb"];


    let noteArray = [...SHARP_NOTES];
    
    // display flat notes if appropriate for root note and major/minor scale combo
    if ((selectedScale.toLowerCase().includes("major") && FLAT_MAJ_KEYS.includes(selectedRoot)) 
      || 
      (selectedScale.toLowerCase().includes("minor") && FLAT_MIN_KEYS.includes(selectedRoot)) 
    ) {
      noteArray = FLAT_NOTES;
    } 
    
    //if (selectedRoot === "Db" && selectedScale.toLowerCase().includes("minor")) {
    //    selectedRoot = "C#"
    //}
    
    return noteArray;
  }