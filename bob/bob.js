var Bob = function(msg) {
  this.msg = msg;
};

Bob.prototype.hey = function(msg) {
  switch (msg) {
  }
  return "Whatever.";
};

module.exports = Bob;
