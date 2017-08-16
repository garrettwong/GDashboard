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
        fs.writeFile(filepath, JSON.stringify(json), function (err) {
            if (err) return console.log(err);
        });
    }

}

module.exports = new FileWriter();