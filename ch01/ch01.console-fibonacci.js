/**
 * Created by eden90267 on 2017/5/20.
 */
console.log("\n");
console.log("------Fibonacci數值應用------");
console.log("\n");
var strFibonacci;
var i = 1, j = 1, s = i + j;
strFibonacci = "輸出Fibonacci數列>>> 1 1 ";
// 迴圈結束判斷條件
while (s <= 1000) {
    strFibonacci = strFibonacci + s + " ";
    i = j;
    j = s;
    s = i + j;
}
console.log(strFibonacci); // 輸出Fibonacci數列>>> 1 1 2 3 5 8 13 21 34 55 89 144 233 377 610 987
console.log("\n");