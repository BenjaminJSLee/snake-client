const net = require('net');
const { IP, PORT } = require('./constants');

/**
 * Establishes connection with the game server
 */
const connect = function() {
  const conn = net.createConnection({
    host: IP,
    port: PORT
  });
  // interpret incoming data as text
  conn.setEncoding('utf8');
  conn.on('connect', () => {
    console.log("Successfully connected to game server.");
    conn.write("Name: BEN");
    // setInterval(() => {
    //   conn.write("Move: left");
    //   setTimeout(()=>{
    //     conn.write("Move: up");
    //   },500);
    // }, 1000);
  });
  conn.on('data', (data) => {
    process.stdout.write(data);
  });
  return conn;
};

module.exports =  {
  connect
};