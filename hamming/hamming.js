var Hamming = function(string1, string2) {
  this.value = string1;
  this.valueTwo = string2;
};

Hamming.prototype.compute = function(string1, string2) {
  if (string1 !== string2) {
    return 1;
  } else if (string1 === string2) {
    return 0;
  }
};

module.exports = Hamming;
