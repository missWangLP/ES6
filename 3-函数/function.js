/**
 * 默认参数值
 * 1.不为中间默认参数值赋值，或者赋值undefined才会使用默认值
 * 2.使用默认参数值将导致arguments对象的行为参照ECMAScript5严格模式下保持一致
 */
function function1(){
    function makeRequest(url, timeout = 2000, callback) { }
    // 使用timeout默认值
    makeRequest('/foo');
    makeRequest('/foo', undefined, function(body){
        doSomething(body)
    });
    // 不使用默认值
    makeRequest('/foo', null, function(body){
        doSomething(body)
    });

    // 默认参数对arguments的影响
    function mixArgsES5(first, second) {
        console.log(arguments);
        console.log(first === arguments[0]); // true
        console.log(second === arguments[1]); // true
        first = 'c';
        second = 'd';
        console.log(arguments);
        console.log(first === arguments[0]); // true
        console.log(second === arguments[1]); // true
    }
    function mixArgsES6(first, second = 'b') {
        console.log(arguments);
        console.log(first === arguments[0]); // true
        console.log(second === arguments[1]); // false
        first = 'c';
        second = 'd';
        console.log(first === arguments[0]); // false
        console.log(second === arguments[1]); // false
    }

    mixArgsES5('a', 'b');
    mixArgsES6('a');
}

/**
 * 默认参数表达式
 * 1.只允许后面的参数引用前面的参数。
 * 2.有自己独立的作用域和临时死区，不可以访问函数体内声明的变量
 */
function function2() {
    function getValue(value){
        return value+5;
    }

    function add(first, second = getValue(first)) {
        return first + second;
    }

    console.log(add(1, 1));
    console.log(add(1));

    function add2 (first, second = first){
        // 函数形参执行步骤
        // let first = 1;
        // let second = first;
        //.....
    }
}

/**
 * 不定参数...
 * 1.该参数为一个数组，包含他本身及之后传入的所有参数
 * 2.所有形参只能存在一个不定参数
 * 3.一定要放在所有参数的末尾
 * 4.不能存在于setter中
 * 
 */
function function3() {
    function pick(object, ...keys){
        let result = Object.create(null);

        // 从第二个参数开始
        for(let i=0, len=keys.length; i<len; i++){
            result[keys[i]] = object[keys[i]];
        }

        return result;
    }
    
    let book = {
        title: 'Understanding ECMAScript 6',
        author: 'Nicholas C. Zakas',
        year: '2016'
    }
    let bookData = pick(book, 'title', 'year');
    console.log(bookData);
}
function3();