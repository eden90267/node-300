# ch01 Node.js控制台模組應用

“讀取 - 求值 - 輸出”迴圈(Read-Eval-Print Loop，REPL)互動式設計環境。

## 1.3 字串格式化的應用

對任何編譯執行或解釋執行的程式設計語言來講，資料格式化輸出都是最基本的功能之一，所謂格式化就是將資料的表現形式固定為某一種常用格式，例如自然數、保留三位小數、日期、時間、IP地址等。

Node.js平台下，資料格式化主要針對以下三種類型：

- 字元型格式
- 數值型格式
- JSON資料交換格式

## 1.10 重定向標準錯誤輸出串流

執行node命令，可指定命令的標準錯誤輸出串流形式，預設狀態是控制台螢幕，也可為檔案重定向。

console模組方法當輸出目標是檔案，是同步執行的，可防止過早退出時遺失資訊。console函數根據輸出目標的不同分為“同步/非同步”兩種方式。

## 1.11 查看Node.js物件的屬性和方法

`console.dir()`方法實際上在底層是透過對obj物件使用`util.inspect()`方法，並將結果輸出到stdout的。

## 1.12 時間計時器應用

```
console.time()
console.timeEnd()
```

這兩個方法都僅使用一個參數，參數值可為任何字串形式，但注意的是這兩個方法所使用的參數字串必須相同，這樣才能正確統計開始與結束時間之間所經過的毫秒數。

## 1.13 查看現在使用的堆疊的方法

`console.trace()`實作了向標準錯誤串流輸出現在使用堆疊的功能。

語法說明：`console.trace(message, [...])`。功能是列印現在位置的堆疊，並跟蹤到標準錯誤輸出串流(`process.stderr`)。

Top：`console.trace()`方法不使用參數時，其測試輸出結果僅顯示trace字串。

## 1.14 對運算式結果進行評估

`console.assert()`斷言判斷。

語法說明：`console.assert(expression, [message], [...])`

如果expression執行結果為false，則拋出帶上message提示資訊的`AssertionError`。如果expression執行結果為true，則不執行結果輸出。

Top：`console.assert()`方法與`assert.ok()`方法相同，實際上`console.assert()`底層實作就是`assert.ok()`方法完成的。

## 1.15 讀取命令列輸入資訊

Node.js實作了幾種從控制台讀取使用者輸入的方法。這裡使用`readline`模組的`question()`方法。

語法說明：`readline.createInterface(options)`，建立一個readline模組的介面實例，該方法定義標準輸入串流和標準輸出串流。

object的options，該參數可傳遞以下幾個值：

- input：要監聽的可讀串流(required)
- output：要寫入readline的可寫串流(required)
- completer：用於Tab自動補全的可選函數
- terminal：如果希望input與output串流像TTY(電腦終端設備)一樣，那麼透過傳遞參數true來實現，並且經由ANSI/VT100轉碼，預設情況下檢查isTTY是否在output串流上產生實體。

question()語法說明：`readline.question(query, callback)`

`rl.close()`執行後會返回系統context環境中。

## 1.16 階層運算輸出

透過電腦程式實作階層運算一般有常規的迴圈計算方法與遞迴計算方法。

## 1.17 向控制台輸出組合控制鍵

很多情況下，應用程式需要模擬組合控制鍵操作(如複製、貼上、復原等)來代替使用者完成一些鍵盤操作功能。

Node.js平台下，透過readline模組的write()方法可以實作向控制台輸出控制鍵的功能。

語法：`readline.write(data, [key])`

write()方法將參數data的內容寫入到控制台標準輸出串流，參數key是一個代表鍵序列的物件，當終端是一個TTY時可用。

## 1.18 模擬一個簡單的控制台介面

`readline.setPrompt()`方法模擬輸出控制台的命令列提示符號。

`readline.setPrompt(prompt, length)`：

- prompt：定義命令列提示符號
- length：定義命令列提示符號的長度(可選)

`readline.prompt()`方法模擬實作控制台，等待接收用戶的輸入。

語法說明：`readline.prompt([preserveCursor])`。

preserveCursor=true，用來阻止命令列提示符號的游標位置被重置為0，通常不用設置。

readline模組可實作控制台的絕大多數功能。

## 1.19 輸出水仙花數

水仙花數就是一個三位自然數的百位、十位和個位數字的立方和。

請見：ch01.console-narcissus.js

## 1.20 輸出質數

質數就是一個整數，該整數只能被1和自身整除。

請見：ch01.console-primeNum.js

## 1.21 列印輸出楊輝三角

兩條斜邊都是數字1組成，其餘的數則是等於它肩上的兩個數之和。

請見：ch01.console-YHTriangle.js