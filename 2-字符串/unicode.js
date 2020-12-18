/**
 * Unicode
 *  一、Unicode的目标是为全世界每一个字符提供【全球唯一的标识符】被称为（码位）-从0开始的数值，
 *     表示字符的【数值和码位】被称为（字符编码）
 * 
 *  二、在UTF-16中，前2¹⁶个码位均以16位编码单元表示，这个范围叫【基本多文种平面BMP】，
 *      对于超出这个范围的，UTF-16引入了【代理对】-（2个16位编码单元表示1个码位）。 辅助平面
 *      1.一个编码单元16位表示的BMP字符
 *      2.两个编码单元32位表示的辅助平面字符
 */
function unicodeES5(){
    let text = '𠮷';
    console.log(text.length); // 长度为 1，length属性为 2
    console.log(/^.$/.test(text)); // false 因为被判定为 2个字符

    console.log(text.charAt(0));
    console.log(text.charAt(1)); // 两个16位的编码单元不表示任何可以打印的字符

    console.log(text.charCodeAt(0));
    console.log(text.charCodeAt(1)); // ES5方法接近而不准确 返回每个16位编码单元对应数值。
}

function unicodeES6(){
    let text = '𠮷a';
    console.log(text.charCodeAt(0)); // 55362
    console.log(text.charCodeAt(1)); // 57271
    console.log(text.charCodeAt(2)); // 97
    
    /**
     * codePointAt
     * 返回与字符串中给定位置对应的码位
     * 接受编码单元的位置，而非字符位置
     */
    console.log(text.codePointAt(0)); // 134071
    console.log(text.codePointAt(1)); // 57271
    console.log(text.codePointAt(2)); // 97

    // 检验字符占用的编码单元数量
    function is32Bit(c) {
        return c.codePointAt(0) > 0xFFFF;
    }
    console.log(is32Bit('𠮷')); // true
    console.log(is32Bit('a')); // false

    /**
     * String.fromCodePoint()
     * 等同于 String.fromCharCode()
     * 传入非BMP的码位作为参数时，结果有可能不同
     */
    console.log(String.fromCodePoint(134071)); // 𠮷

    /**
     * normalize()
     * 标准等价分解，标准等价重组（NFC）默认方法
     * 标准等价分解（NFD）
     * 兼容等价分解（NFKC）
     * 兼容等价分解，标准等价重组（NFKD）
     */
    let arrs = ['b','s','w','t','z','sd','y','r','i','a'];
    arrs.sort(function(first, second){
        let firstNormalize = first.normalize(),
            secondNormalize = second.normalize();

        if(firstNormalize < secondNormalize ) {
            return -1;
        }else if(firstNormalize === secondNormalize){
            return 0;
        }else{
            return 1;
        }
    });
    console.log(arrs);

    /**
     * u正则操作符
     * 从编码单元操作模式切换为字符模式
     */
    console.log(/^.$/u.test(text)); // true
}
unicodeES6();