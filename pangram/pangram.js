var Pangram = function(str) {};

Pangram.prototype.isPangram = function(str) {
  if (typeof str !== "string") {
    return false;
  }
  for (var i = 0; i < str.length; i++) {
    if (str.charCodeAt(i) > 127) {
      return false;
    }
  }
  return true;
};

module.exports = Pangram;
