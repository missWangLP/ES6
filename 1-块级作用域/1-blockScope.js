// 块级作用域，let、const详解

/**
 * let声明
 *  1、存在临时死区TDZ，变量声明不会提前；
 *  2、相同作用域不可重复声明变量
 *  3、声明的变量只在当前作用域生效
 *  4、不会覆盖window的属性
 */
function getValue(condition) {
    console.log(value); // 声明不会提升，语法错误
    let value = '1';
    let value = '2'; // 不可重复声明相同变量，语法错误
    if(condition){
        let value = 'name';
        return value;
    }else{
        return null;
    }
}

function forLet() {
    let funcs = [];
    for(let i = 0; i < 10; i++) { // let 声明每次循环都会创建一个新变量i，将它赋值给i的当前值。
        funcs.push(function() {
            console.log(i);
        })
    }
    funcs.forEach(function(fn) {
        fn(); // 0,1,2...9
    });

    let obj = {
        a: true,
        b: true,
        c: true
    }
    for(let key in obj){
        console.log(key); // a,b,c
        // var声明key的话就是3个c
    }
}

/**
 * const声明（常量）
 *  1、let声明有的特性它都有（循环中++循环不可用，因为++试图改变const的值）
 *  2、声明变量时必须赋值
 *  3、声明变量后，不可以用任何方式改变变量值。
 *  4、声明的是一个对象，可以改变对象内部的属性，但不可以改变对象的绑定。
 */
function sampleConst() {
    const value = '';
    const value; // 语法错误

    const obj = {
        name: '大灰狼'
    }
    obj.name = '小红帽'; // OK
    obj = {
        name: '小红帽'
    } // 语法错误
}

/**
 * let、const 声明时会存入所谓的“临时死区”（temporal dead zone）或TDZ中，只有执行过变量声明语句后，变量才会从TDZ中移出。
 */


