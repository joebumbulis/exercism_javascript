var DnaTranscriber = function(dna) {
  this.value = dna;
};

DnaTranscriber.prototype.toRna = function(dna) {
  transDna = "";
  for (var i = 0; i <= dna.length; i++) {
    if (dna[i] == "X") {
      throw new Error("Invalid input");
    }
    if (dna[i] == "C") {
      transDna = transDna + "G";
    } else if (dna[i] == "G") {
      transDna = transDna + "C";
    } else if (dna[i] == "A") {
      transDna = transDna + "U";
    } else if (dna[i] == "T") {
      transDna = transDna + "A";
    }
  }
  return transDna;
};

module.exports = DnaTranscriber;
