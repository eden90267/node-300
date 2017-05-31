/**
 * Created by eden90267 on 2017/6/1.
 */
console.info("\n");
console.info("------ 階層運算 ------");
console.info("\n");
var isFactorial = 1;
var strFactorial;

var readline = require('readline');
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question("請輸入階層運算起始數值：\nn = ", function (num) {
    strFactorial = num + "! = " + factorial(num);
    console.info(strFactorial);
    console.info("\n");
    rl.close();
});

/**
 * 定義階層運算的遞迴方法
 *
 * @param isNum
 */
function factorial(n) {
    if (n > 0) {
        if (n == 1) {
            isFactorial = 1;
        } else {
            isFactorial = n * factorial(n-1);
        }
    }
    return isFactorial;
}

//
//
// ------ 階層運算 ------
//
//
// 請輸入階層運算起始數值：
// n = 6
// 6! = 720
//
//
