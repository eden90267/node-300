/**
 * Created by eden90267 on 2017/5/31.
 */
var n = 0;
console.time('10000x10000-times');    // 開始時間計時器
for (var i = 0; i < 10000; i++) {
    for (var j = 0; j < 10000; j++) {
        n++;
    }
}
console.timeEnd('10000x10000-times'); // 結束時間計時器
console.info(n);
