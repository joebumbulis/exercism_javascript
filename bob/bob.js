var Bob = function(msg) {
  this.msg = msg;
};

Bob.prototype.hey = function(msg) {
  var question = msg.slice(-1);

  if (msg === msg.toUpperCase()) {
    return "Whoa, chill out!";
  } else if (question === "?") {
    return "Sure.";
  } else {
    return "Whatever.";
  }
};

module.exports = Bob;
