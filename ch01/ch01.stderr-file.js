/**
 * Created by eden90267 on 2017/5/20.
 */
var fs = require('fs');
var file = 'chapter01/not-found.txt';
var encoding = 'UTF-8';
fs.readFile(file, encoding, function (err, data) {
    if (err) {
        console.error("error - \n %s", err);
        console.warn("warn - \n %s", err);
    } else {
        console.log(data);
    }
});

// $ node ch01.stderr-file.js 2> error.log