// kill $(lsof -n -P -i :27017 | awk '{print $2}' |  sed -n 2p)

// requires sudo access
const { spawn } = require('child_process');
const { exec } = require('child_process');

// let cmd = `lsof -n -P -i :27017 | awk '{print $2}' | sed -n 2p`;
let cmd = `server/utilities/sh/killProcessOnPort.sh 27017`;
console.log('kill process on port', cmd);
 
const testScript = exec(cmd);

testScript.stdout.on('data', function(data){
    console.log(data); 
});

testScript.stderr.on('data', function(data){
    console.log(data);
});

// let sh = spawn('bash', ['server/utilities/sh/killProcessOnPort.sh', '27017']);

// sh.stdout.on('data', (data) => {
//     console.log(`stdout: ${data})`);
// });

// sh.stderr.on('data', (data) => {
//     console.log(`stderr: ${data}`);
// });

// sh.on('close', (code) => {
//     console.log(`child process excited with code ${code}`);
// });
