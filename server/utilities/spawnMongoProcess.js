const { spawn } = require('child_process');

class SpawnMongoDb {
    constructor() {
        const mongo = spawn('/Users/GWM/mongodb/mongodb-osx-x86_64-3.2.3 2/bin/mongod', 
            ['', '']);

        mongo.stdout.on('data', (data) => {
            console.log(`stdout: ${data}`);
        });

        mongo.stderr.on('data', (data) => {
            console.log(`stderr: ${data}`);
        });

        mongo.on('close', (code) => {
            console.log(`child process exited with code ${code}`);
        });
    }
}

// export
module.exports = new SpawnMongoDb();