const { connect } = require('./client');

const setupInput = function() {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  return stdin;
};

console.log('Connecting ...');
connect();

const stdin = setupInput();

const handleUserInput = (key) => {
  if (key === '\u0003') {
    console.log("OOPSIE WOOPSIE");
    process.exit();
  }
};

stdin.on('data', handleUserInput);
