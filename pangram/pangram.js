var Pangram = function(str) {};

Pangram.prototype.isPangram = function(str) {
  if (typeof str !== "string") {
    return false;
  }
  for (var i = 0; i < str.length; i++) {
    if (str.charCodeAt(i) > 65 < 91 > 127) {
      return false;
    }
    // else if (str.charCodeAt(i) < 91) {
    //   return false;
    // }
  }
  return true;
};

module.exports = Pangram;
