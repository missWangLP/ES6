/**
 * @desc 计数 + 求同存异
 * @param string[] strs: 字符串数组, 例如 ['aa', 'ab', 'ab', 'cc', 'cba']
 * @return {[key: string]: number} 出现次数对象, 例如 { aa: 1, ab: 2, cc: 1, cba: 1 }
 */
function frequencyMap(strs) {
  let obj = {};
  for (let info of arr) {
    obj[info] >= 1 ? obj[info]++ : obj[info] = 1;
  }
  return obj;
}
let arr = ['aa', 'ab', 'ab', 'cc', 'cba'];
console.log("求同存异：", frequencyMap(arr));

/**
 * @desc 数组中 第K大和第M大 出现次数相乘之和
 * @param number[] arr: 数组
 * @param number k: 大小排序，第K大的值
 * @param number m: 大小排序，第m大的值
 * @return number 和
 */
function findTopSum(arr, k, m) {
  let nums = arr.sort((a,b)=>{a-b}),obj = Object.create(null), num = 0;
  for(let info of nums){
    obj[info]>=1? obj[info]++: obj[info]=1;
  }
  let arr2 = Object.keys(obj);
  let a = arr2.length - k, b = arr2.length - m;
  console.log(obj[arr2[a]]);
  num = arr2[a] * obj[arr2[a]] + arr2[b] * obj[arr2[b]];
  return num
}
findTopSum([1,2,4,4,3,5],2,4);

/**
 * @desc 数组 + 条件拼接
 * @param string[] arr: 数组
 * @param number condition: 条件函数
 * @return string[] 符合条件的数组
 */
function adjoin(arr, condition) {
  let nums = [], i = true,arrl = 0, bol = false;
  for(let info of arr){
    if(condition(info)) {
      if(i){
        nums.push([]);
        i = !i;
      }
      if(nums.length>1 && bol){
        nums.push([]);
        arrl = nums.length - 1;
        bol = false
      }
      nums[arrl].push(info);
    }else{
      nums.push(info)
      bol = true;
    }
  }
  return nums;
}
console.log(adjoin([1, 2, 3, 4, 5], item => item !== 3));

/**
 * @desc 字符串替换
 * @param Object str: 需要替换的字符串
 *               t1: 需要替换的字符串
 *               t2: 替换值
 *               all: 是否全部替换
 * @return string 替换后的字符串
 */
function strEdit(o = {all: true}) {
  o.all = o.all === undefined || o.all === '' || o.all === null ? true : o.all;
  let t = o.all ? new RegExp(o.t1, 'g') : new RegExp(o.t1);
  let str = o.str.replace(t, o.t2);
  return str;
}
console.log(strEdit({
  str: 'abcdefghijklmncdocd',
  t1: 'cd',
  t2: '345',
  all: true
}));