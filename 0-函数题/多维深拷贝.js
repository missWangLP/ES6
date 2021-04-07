/**
 * @desc 数组深拷贝
 * @param Array arr 数组
 */
function arrDstr(arr = []) {
  let str = arr.join(',').split(',').join('');
  return str;
}
console.log(arrDstr([1,[1,2,[1,2,3,[1,2,3,4]]]]));

/**
 * @desc 对象深拷贝
 * @param Function obj 对象
 */
function format(obj = {}) {
  let type = typeof obj;
  if (type !== "object" || type === null) {
    if (/string|undefined|function/.test(type)) {
      obj = `"${obj}"`;
    }
    return String(obj);
  } else {
    let json = [],
    arr = (obj && obj.constructor === Array);

    for (let k in obj) {
      let v = obj[k];
      let type = typeof v;

      if (/string|undefined|function/.test(type)) {
        v = `"${v}"`;
      } else if (type === "object") {
        v = myJsonStringify(v);
      }

      json.push((arr ? "" : `"${k}":`) + String(v));
    }
	  console.log((arr ? "[" : "{") + String(json) + (arr ? "]" : "}"));
    return (arr ? "[" : "{") + String(json) + (arr ? "]" : "}")
  }
}

// test case
const data = {
  a: 1,
  b: [
    2,
    3,
    {
      c: 4
    }
  ],
  d: {
    e: 5,
    f: {
      g: '6'
    },
  }
}
console.log(format(data));