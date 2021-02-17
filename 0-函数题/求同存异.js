/**
 * @desc 计数 + 求同存异
 * @param string[] strs: 字符串数组, 例如 ['aa', 'ab', 'ab', 'cc', 'cba']
 * @return {[key: string]: number} 出现次数对象, 例如 { aa: 1, ab: 2, cc: 1, cba: 1 }
 */
function frequencyMap(strs) {
  //TODO your code goes here...
  let obj = Object.create(null);
  for (let info of arr) {
    obj[info] >= 1 ? obj[info]++ : obj[info] = 1;
  }
  return obj;
}
let arr = ['aa', 'ab', 'ab', 'cc', 'cba'];
console.log("求同存异：", frequencyMap(arr));