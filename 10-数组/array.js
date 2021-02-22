/**
 * Array.of(value)
 * ES6新增创建数组的方法，接收一个，或多个参数，返回一个数组
 */
let arr = new Array(2); // ES5 会把单个数值类型赋值给 length属性
let arr1 = Array.of(2); // ES6 [2]

/**
 * Array.from(可迭代的对象或类数组对象, 映射函数, 映射函数的this对象)
 * 把一个可迭代的对象或类数组对象转换为数组
 */
let numbers = {
  *[Symbol.iterator](){
    yield 1;
    yield 2;
    yield 3;
  }
}
let arr2 = Array.from(numbers); // [1, 2, 3]

let helper = {
  diff: 1,
  add(value) {
    return value + this.diff
  }
}

var diff = 2;
function translate() {
  return Array.from(arguments, helper.add, window); // 第三个参数传入 helper =[1, 2, 3]
}
// console.log(translate(1,2,3)); // [3, 4, 5]

/**
 * find()
 * findIndex()
 * 条件查找，传入的回调函数一旦返回true，该函数就会立即停止并返回值（键）
 */
let arr3 = [0, 2, 12, 32, 33, 35, 50];
// console.log(arr3.find(n => n>32)); // 33
// console.log(arr3.findIndex(n => n>32)); // 4

/**
 * fill(value, 包含起始位置, 不包含结束位置)
 * 将选定位置的值替换为 value
 * 原数组发生改变
 */
// console.log(arr3.fill(1,2,5)); // [0, 2, 1, 1, 1, 35, 50]
// console.log(arr3);

/**
 * copyWithin(开始填充值的索引位置， 开始复制值的索引位置, 复制几次)
 * 复制替换，类似fill方法
 * 原数组发生改变
 */
let arr4 = [1,2,3,4,5,6,7]
console.log(arr4.copyWithin(2, 0, 1)); // [0, 2, 1, 1, 1, 35, 50]