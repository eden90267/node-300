/**
 * Created by eden90267 on 2017/5/31.
 */
console.trace();
console.trace("start");
var fs = require('fs');
var file = 'chapter01/not-found.txt';
var encoding = 'UTF-8';
fs.readFile(file, encoding, function (err, data) {
    console.trace("fs-start");
    if (err) {
        console.error("error - \n %s", err);
        console.warn("warn - \n %s", err);
    } else {
        console.log(data);
    }
    console.trace("fs-end");
});
console.trace("end");

// Trace
// at Object.<anonymous> (/Users/eden90267/Desktop/node/node-300/ch01/ch01.console-trace.js:4:9)
// at Module._compile (module.js:571:32)
// at Object.Module._extensions..js (module.js:580:10)
// at Module.load (module.js:488:32)
// at tryModuleLoad (module.js:447:12)
// at Function.Module._load (module.js:439:3)
// at Module.runMain (module.js:605:10)
// at run (bootstrap_node.js:425:7)
// at startup (bootstrap_node.js:146:9)
// at bootstrap_node.js:540:3
// Trace: start
// at Object.<anonymous> (/Users/eden90267/Desktop/node/node-300/ch01/ch01.console-trace.js:5:9)
// at Module._compile (module.js:571:32)
// at Object.Module._extensions..js (module.js:580:10)
// at Module.load (module.js:488:32)
// at tryModuleLoad (module.js:447:12)
// at Function.Module._load (module.js:439:3)
// at Module.runMain (module.js:605:10)
// at run (bootstrap_node.js:425:7)
// at startup (bootstrap_node.js:146:9)
// at bootstrap_node.js:540:3
// Trace: end
// at Object.<anonymous> (/Users/eden90267/Desktop/node/node-300/ch01/ch01.console-trace.js:19:9)
// at Module._compile (module.js:571:32)
// at Object.Module._extensions..js (module.js:580:10)
// at Module.load (module.js:488:32)
// at tryModuleLoad (module.js:447:12)
// at Function.Module._load (module.js:439:3)
// at Module.runMain (module.js:605:10)
// at run (bootstrap_node.js:425:7)
// at startup (bootstrap_node.js:146:9)
// at bootstrap_node.js:540:3
// Trace: fs-start
// at ReadFileContext.callback (/Users/eden90267/Desktop/node/node-300/ch01/ch01.console-trace.js:10:13)
// at FSReqWrap.readFileAfterOpen [as oncomplete] (fs.js:358:13)
// error -
// Error: ENOENT: no such file or directory, open 'chapter01/not-found.txt'
// warn -
// Error: ENOENT: no such file or directory, open 'chapter01/not-found.txt'
// Trace: fs-end
// at ReadFileContext.callback (/Users/eden90267/Desktop/node/node-300/ch01/ch01.console-trace.js:17:13)
// at FSReqWrap.readFileAfterOpen [as oncomplete] (fs.js:358:13)
