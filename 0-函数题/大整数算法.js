/**
 * 大整数相加. 正常相加会溢出的两个整数, 以字符串方式相加
 * @param num1 加数, 字符串, 例 '123456789123456789'
 * @param num2 加数, 字符串, 例 '987654321987654321'
 * @return 和, 例             '1111111111111111110'
 */
function addStrings(num1, num2) {
  let result = '', c = 0;
  num1 = num1.split('');
  num2 = num2.split('');
  while(num1.length || num2.length || c){
    c += ~~num1.pop() + ~~num2.pop();
    result = c % 10 + result;
    c = c > 9;
  }
  return result.replace(/^0+/, '');
}
console.log("大整数相加：", addStrings('123456789123456789', '987654321987654321'));

/**
 * 大整数相减. 正常相加会溢出的两个整数, 以字符串方式相加
 * @param num1 减数, 字符串, 例 '987654321987654321'
 * @param num2 减数, 字符串, 例 '123456789123456789'
 * @return 差, 例             '1111111111111111110'
 */
function subString(num1, num2){
  let result = '', c = 0, b = true; // b来决定那个减数在前面，是否需要加-号。
  num1 = num1.split('');
  num2 = num2.split('');
  
  if(num1.length > num2.length){ // 数值1在前
    b = true;
  }else if (num1.length = num2.length){ // 从大位数开始 判断那个数值大，那个数值在前面
    for(let i = num1.length-1; i > -1; i--){
      if(num1[i]<num2[i]){
        b = false;
        break;
      }
    }
  }else{ // 数值2在前
    b = false;
  }
  while(num1.length || num2.length){
    let a = b ? ~~num1.pop() - ~~num2.pop() - c : ~~num2.pop() - ~~num1.pop() - c;
    c = a < 0 ? (10 - -a) : a; // 如果差为负数，值为 10 -（差的绝对值）
    result = c + result;
    c = a < 0;
  }
  result = result.replace(/^0+/, ''); // 去掉前面的0
  if(!b){ // 负数
    result = '-' + result;
  }
  return result;
}
console.log("大整数相减：", subString('123456789123456789', '987654321987654321'));
