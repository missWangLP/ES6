/**
 * includes()
 * startsWith()
 * endWith()
 * 在字符串中检测指定文本，返回boolean值
 * 1.指定文本 2.索引值
 * includes()和startsWith()都是从起始位置或者传入索引值开始匹配。
 * endWith()从末尾或者 传入索引值减去欲搜索文本长度，正相匹配。
 * 都不支持正则表达式
 */
let msg = "Hello world!";
console.log(msg.startsWith('Hello')); // true
console.log(msg.endsWith('!')); // true
console.log(msg.includes('o')); // ture

console.log(msg.startsWith('o', 4)); // true
console.log(msg.endsWith('o', 8)); // true   起始位置 8-1
console.log(msg.includes('o', 8)); // false

/**
 * repeat()
 * 返回一个传入字符串复制N遍的值
 * 下面是用来新建一个缩进空格
 */
let indent = ' '.repeat(4), indentLevel = 0;
console.log(`${indent.repeat(++indentLevel)}a`); // '    'a

/**
 * 模板字面量``
 * 1.多行字符串
 * 2.基本的字符串格式化（将变量值嵌入字符串）
 * 3.HTML转义，向HTML插入经过安全转换后的字符串
 */
let message = tag`huilang${msg}${indent}qweq`;
console.log(message);

function tag(literals, ...substitutions) {
    // raw用于转义的原生字符串 如换行符/n
    let result = '';

    for(let i = 0; i<substitutions.length; i++){
        result += literals.raw[i];
        result += substitutions[i];
    }

    result += literals.raw[literals.length-1];

    return result;
}