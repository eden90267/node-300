/**
 * Created by eden90267 on 2017/6/1.
 */
var i, j, k, strLine;
var readline = require('readline');
rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question("line is：", function (iLine) { // 輸入楊輝三角行數
    // 輸出楊輝三角第一行
    strLine = ">";
    for (i = 1; i <= 10 * iLine; i++) {
        if (i == 5 * iLine) {
            strLine = strLine + 1;
        } else {
            strLine = strLine + " ";
        }
    }
    console.info(strLine);
    // 輸出楊輝三角後續行
    strLine = ">";
    for (j = 1; j <= iLine - 1; j++) {
        for (k = 1; k < 5 * (iLine - j - 1); k++) {
            strLine = strLine + " ";
        }
        var y = 1;
        strLine = strLine + FormatNumber(y);
        for (k = 1; k <= j; k++) {
            y = y * (j - k + 1) / k;
            strLine = strLine + FormatNumber(y);
        }
        console.info(strLine);
        strLine = ">";
    }
    rl.close();
});
/**
 * 用於格式化輸出楊輝三角
 *
 * @param y
 * @constructor
 */
function FormatNumber(y) {
    var strL = "";
    if (y < 10) {
        strL = strL + "     " + y + "    ";
    } else if (y >= 10 && y < 100) {
        strL = strL + "    " + y + "    ";
    } else if (y >= 100) {
        strL = strL + "    " + y + "   ";
    }
    return strL;
}