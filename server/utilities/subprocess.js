const { spawn } = require('child_process');

// ls
const ls = spawn('ls', ['-lh', '/usr']);

ls.stdout.on('data', (data) => {
    console.log(`stdout: ${data}`);
});

ls.stderr.on('data', (data) => {
    console.log(`stderr: ${data}`);
});

ls.on('close', (code) => {
    console.log(`child process exited with code ${code}`);
});


// pwd
const pwd = spawn('pwd', []);

pwd.stdout.on('data', (data) => {
    console.log(`stdout: ${data})`);
});

pwd.stderr.on('data', (data) => {
    console.log(`stderr: ${data}`);
});

pwd.on('close', (code) => {
    console.log(`child process excited with code ${code}`);
});


// netstat -an
const netstat = spawn('netstat', ['-an | grep 3001']);

netstat.stdout.on('data', (data) => {
    console.log(`stdout: ${data})`);
});

netstat.stderr.on('data', (data) => {
    console.log(`stderr: ${data}`);
});

netstat.on('close', (code) => {
    console.log(`child process excited with code ${code}`);
});
