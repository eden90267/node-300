/**
 * Created by eden90267 on 2017/6/1.
 */
var m, a, b, c, sum;
for(m=100; m <1000; m++) {
    a = parseInt(m / 100);              // 計算出百位數
    b = parseInt((m - a * 100) / 10);   // 計算出十位數
    c = parseInt(m - a * 100 - b * 10); // 計算出個位數
    sum = a * a * a + b * b * b + c * c * c;
    if (m == sum) { // 是否滿足水仙花規則
        console.info("%d", m);
    }
}

// 153
// 370
// 371
// 407

// parseInt()：為小數取整數，採用小數直接捨棄的辦法