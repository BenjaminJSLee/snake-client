const setupInput = function() {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  return stdin;
};

const handleUserInput = (key) => {
  if (key === '\u0003') {
    console.log("OOPSIE WOOPSIE");
    process.exit();
  }
};

const stdin = setupInput();
stdin.on('data', handleUserInput);

module.exports = {
  setupInput
};