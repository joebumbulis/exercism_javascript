// var Pangram = function(sentence) {
//   this.sentence = sentence.toLowerCase().split("");
//   this.metric = {
//     a: 1,
//     b: 1,
//     c: 1,
//     d: 1,
//     e: 1,
//     f: 1,
//     g: 1,
//     h: 1,
//     i: 1,
//     j: 1,
//     k: 1,
//     l: 1,
//     m: 1,
//     n: 1,
//     o: 1,
//     p: 1,
//     q: 1,
//     r: 1,
//     s: 1,
//     t: 1,
//     u: 1,
//     v: 1,
//     w: 1,
//     x: 1,
//     y: 1,
//     z: 1
//   };
// };
//
// Pangram.prototype.isPangram = function() {
//   var sentence = this.sentence;
//   var metric = this.metric;
//
//   for (i = 0; i < sentence.length; i++) {
//     if (metric[sentence[i]] && metric[sentence[i]] > 0) {
//       metric[sentence[i]]--;
//     }
//   }
//   result = Object.values(metric);
//   return !result.includes(1);
// };
//
// module.exports = Pangram;

///
var Pangram = function(str) {
  this.sentence = str;
};

Pangram.prototype.isPangram = function() {
  letters = {};

  for (var i = 0; i < this.sentence.length; i++) {
    if (this.sentence[i].toUpperCase() !== this.sentence[i].toLowerCase()) {
      letters[this.sentence[i]] = true;
    }
  }
  return Object.keys(letters).length >= 26 ? true : false;
};

module.exports = Pangram;
