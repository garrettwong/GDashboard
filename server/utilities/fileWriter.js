const fs = require('fs');

class FileWriter {
    readJsonFileSync(filepath, encoding) {
        if (typeof (encoding) == 'undefined') {
            encoding = 'utf8';
        }
        var file = fs.readFileSync(filepath, encoding);

        return JSON.parse(file);
    }

    writeJsonFileAsync(filepath, json) {
        return fs.writeFile(filepath, JSON.stringify(json), function (err) {
            if (err) return console.log(err);
        });
    }

    writeJsonFileSync(filepath, json) {
        fs.writeFileSync(filepath, JSON.stringify(json));
    }

}

// export
module.exports = new FileWriter();