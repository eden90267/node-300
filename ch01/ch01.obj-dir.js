console.dir(123);
console.dir("abc");
console.dir({"abc": 123});
console.dir(1 + 2 * 3 + 1);
console.dir(console); // 會輸出console物件所包含的全部屬性和方法明細

// Console {
//     log: [Function: bound log],
//     info: [Function: bound log],
//     warn: [Function: bound warn],
//     error: [Function: bound warn],
//     dir: [Function: bound dir],
//     time: [Function: bound time],
//     timeEnd: [Function: bound timeEnd],
//     trace: [Function: bound trace],
//     assert: [Function: bound assert],
//     Console: [Function: Console] }
