/**
 * Created by eden90267 on 2017/6/1.
 */
console.info('Node.js - readline.write() Usage');
var readline = require('readline');
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.write('Delete me! Wait for 3 seconds...');
var timeoutLength = 3 * 1000;
var timeout = setTimeout(function () {
    // 模擬ctrl+u快速鍵，刪除之前所寫行
    rl.write(null, {ctrl: true, name: 'u'});
}, timeoutLength);