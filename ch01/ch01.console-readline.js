/**
 * Created by eden90267 on 2017/6/1.
 */
var readline = require('readline');
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question("What is your name? ", function (answer) {
    console.log("My name is ", answer);
    rl.close();
});
rl.question("How old are you? ", function (answer) {
    console.log("I'm ", answer);
    rl.close();
});