/**
 * Created by eden90267 on 2017/6/1.
 */
var i = 0;
var j = 1;
console.assert(i == 0, "OK");
console.assert(i == j, "throw an exception");

//
// assert.js:81
// throw new assert.AssertionError({
//     ^
//     AssertionError: throw an exception
// at Console.assert (console.js:95:23)
// at Object.<anonymous> (/Users/eden90267/Desktop/node/node-300/ch01/ch01.console-assert.js:7:9)
// at Module._compile (module.js:571:32)
// at Object.Module._extensions..js (module.js:580:10)
// at Module.load (module.js:488:32)
// at tryModuleLoad (module.js:447:12)
// at Function.Module._load (module.js:439:3)
// at Module.runMain (module.js:605:10)
// at run (bootstrap_node.js:425:7)
// at startup (bootstrap_node.js:146:9)