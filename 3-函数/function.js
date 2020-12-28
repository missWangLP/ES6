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
function4();
function function4() {
    /**
     * 求：组合C(m, n)，m为上标，n为下标。m选n的所有项
     * m {必传} 原始数据
     * n {必传} 当前项还需元素的个数
     * currentIndex 当前索引
     * choseArr 当前项的部分元素集合（不是完整项，是生成完整项的一个中间状态）
     * result 所有项的结果结合
     */
    function cmn(m, n, currentIndex = 0, choseArr = [], result = []) {
        // console.count('cmn');
        let mLen = m.length
            // 可选数量小于项所需元素的个数，则递归终止
        if (currentIndex + n > mLen) {
            return
        }
        for (let i = currentIndex; i < mLen; i++) {
            // n === 1的时候，说明choseArr在添加一个元素，就能生成一个新的完整项了。
            // debugger
            if (n === 1) {
                // 再增加一个元素就能生成一个完整项，再加入到结果集合中
                result.push([...choseArr, m[i]])
                // 继续下一个元素生成一个新的完整项
                i + 1 < mLen && cmn(m, n, i + 1, choseArr, result)
                break
            }
            // 执行到这，说明n > 2，choseArr还需要两个以上的元素，才能生成一个新的完整项。则递归，往choseArr添加元素
            cmn(m, n - 1, i + 1, [...choseArr, m[i]], result);
        }
        return result
    }
    var arr1 = ['a', 'b', 'c', 'd']
    console.time('cmn');
    console.dir(cmn(arr1, 2));
    console.timeEnd('cmn');
}