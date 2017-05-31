/**
 * Created by eden90267 on 2017/6/1.
 */
var readline = require('readline');
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question("Please enter number? ", function (iNum) {
    var strPrimeNum = " 2 ";
    for (var i = 3; i <= iNum; i++) {
        var bFlag = true;
        for (var j = 2; j < i; j++) {
            if (i%j == 0) {
                bFlag = false;
                break;
            }
        }
        if (bFlag) {
            strPrimeNum += i + " ";
        }
    }
    console.log("Prime number > " + strPrimeNum);
    rl.close();
});

// Please enter number? 50
// Prime number >  2 3 5 7 11 13 17 19 23 29 31 37 41 43 47