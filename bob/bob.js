var Bob = function(msg) {
  this.msg = msg;
};

Bob.prototype.hey = function(msg) {
  if (msg === msg.toUpperCase()) {
    return "Whoa, chill out!";
  } else {
    return "Whatever.";
  }
};

module.exports = Bob;
