/*
A single instance of Node.js runs in a single thread. To take advantage of multi-core systems,
the user will sometimes want to launch a cluster of Node.js processes to handle the load.
The cluster module allows easy creation of child processes that all share server ports.
*/

const cluster = require('cluster');
const numCPUs = require('os').cpus().length;

if (cluster.isMaster) {
    console.log(`Master ${process.pid} is running`);
    // Fork workers.
    for (let i = 0; i < numCPUs; i++) {
        cluster.fork();
    }

} else {
    console.log('                  (1 of ' + numCPUs + ' CPU cores\)\n                    Worker started\n' +
      '         =H| |========mn=======nm========| |H=\n' +
      '           |_|        ( \\     / )        |_|\n' +
      '                       \\ )(")( /\n' +
      '                       ( /\\_/\\ )\n' +
      '                        \\'+ process.pid +' /\n' +
      '                         )=O=(\n' +
      '                        /  _  \\\n' +
      '                       /__/ \\__\\\n' +
      '                       | |   | |\n' +
      '                       |_|   |_|\n' +
      '                       (_)   (_)\n' +
      '----------------------------------------------------'
    )
    // console.log(`\(1 of ${numCPUs} CPU cores\) Worker ${process.pid} started`);
    /*
    setInterval(function, milliseconds)
    Same as setTimeout(), but repeats the execution of the function continuously.
    */
    setInterval(function(){
        Math.random() * Math.random();
    }, 0.0005);
}
