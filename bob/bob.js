var Bob = function(msg) {
  this.msg = msg;
};

Bob.prototype.hey = function(msg) {
  switch (msg) {
    case "shouting":
      if ((msg = msg.toUpperCase())) return "Whoa, chill out!";

    default:
      return "Whatever.";
  }
};

module.exports = Bob;
