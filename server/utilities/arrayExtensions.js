const fs = require('fs');

class ArrayExtensions {
    constructor() {
        // initializes array extensions
        Array.prototype.findById = function (id) {
            for (var i = 0; i < this.length; i++) {
                if (this[i].id == id) {
                    return this[i];
                }
            }
            return null;
        };
        Array.prototype.findIndexById = function (id) {
            for (var i = 0; i < this.length; i++) {
                console.log(this[i].id + ' vs ' + id)
                if (this[i].id == id) {
                    return i;
                }
            }
            return -1;
        };
        Array.prototype.findMaxId = function () {
            var maxId = 1;
            for (var i = 0; i < this.length; i++) {
                maxId = maxId > this[i].id ? maxId : this[i].id;
            }
            return parseInt(maxId);
        };
    }
}

// export
module.exports = new ArrayExtensions();