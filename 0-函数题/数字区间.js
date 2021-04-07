// 1-n 中， 数字4出现的次数
function fnN(n){
  let num = 0;
  for(let i = 1; i<=n; i++){
    for(let info of i.toString()){
      if(info == '4'){
        num++;
      }
    }
  }
  return num;
}
console.log(fnN(50));

// 3 - 33 中 生成n个随机整数  （转换思维，X-Y之间生成N个随机整数）
function fnRandom(n){
  if(n>31) n = 31;
  let set = new Set();
  while(set.size < n) {
    set.add(parseInt(((Math.random() * (33 - 3)) + 3)));
  }
  return [...set]
}
console.log(fnRandom(30))