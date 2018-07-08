const app = require('./server/server');
const { spawn } = require('child_process')

const server = app.listen(4000, () => {
  console.log('Listening');
});

process.on( 'SIGINT', function () {
  spawn('./script/stop-docker.sh', [], {
    stdio: 'inherit'
  })
  server.close(function () {
    console.log("Finished all requests");
  });
});