/**
 * 一段程序必然可以分解为 几个块
 * 现在块 块中代码会立即执行
 * 将来块 块中代码会在将来某个时间执行
 * 如果将一段代码封装入函数，并且作为相应某个事件的处理函数，那么就是引入了 异步机制
 * 比如: 用户点击事件/定时器事件/异步Ajax...
 */
function fn () {  // 现在块
  console.log('fn') // 将来块
}
setTimeout(fn, 1000); // 现在块
console.log(fn); // 现在块


/**
 * 关于console.*是同步异步的问题
 * console是宿主对象，其实现根据宿主环境的不同而有差异
 * 由于认为I/O操作是比较消耗的操作，在处理 引用对象类型时，一般会作为异步来操作console
 * 所以最安全的做法是 JSON序列化,或者直接打印 a.index
 */
var a = {
  index: 1,
}
console.log(a); // { index: 2 }
a.index++;