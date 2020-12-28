/**
 * @desc 防抖
 * @param Function fn 执行函数
 * @param Number time 间隔ms,默认800
 * @param Boolean immediate true：立即执行, false：等待后执行
 */
function debnunce(fn, time = 800, immediate = true) {
  let timeout;
  return function(){
    let me = this, args = arguments;
    if(timeout) clearTimeout(timeout);
    if(immediate){
      let now = !timeout;
      timeout = setTimeout(()=>{
        timeout = null;
      }, time)
      if(now) fn.apply(me, args);
    }else{
      timeout = setTimeout(()=>{
        fn.apply(me, args);
      }, time)
    }
  }
}

/**
 * @desc 节流
 * @param Function fn 执行函数
 * @param Number time 间隔ms,默认800
 * @param Boolean immediate true：立即执行(时间戳), false：等待后执行（定时器）
 */
function throttle(fn, time = 800, immediate = true) {
  let timeout, previous = 0;
  return function () {
    let me = this, args = arguments;
    if(immediate){
      let now = Date.now();
      if(now - previous > time){
        fn.apply(me, args);
        previous = now;
      }
    }else{
      if(!timeout){
        timeout = setTimeout(()=>{
          timeout = null;
          fn.apply(me, args);
        }, time)
      }
    }
  }
}

// 防抖是控制次数，节流是控制频率
let div = document.getElementById('div'),num = 0;
function count() {
  div.innerHTML = num++;
}
div.onmousemove = throttle(count, 800, false);