var Hamming = function(string1, string2) {
  this.value = string1;
  this.valueTwo = string2;
};

Hamming.prototype.compute = function(string1, string2) {
  if (string1.length !== string2.length) {
    throw new Error("DNA strands must be of equal length.");
  }
  var diff = 0;
  for (var i = 0; i <= string1.length; i++)
    if (string1[i] !== string2[i]) {
      diff = diff + 1;
    }
  return diff;
};

module.exports = Hamming;
