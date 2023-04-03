<!--
请给如下代码写一个使用文档。 
/** * @description 数字字段显示千位分隔符 * @param number * @param options object {digit: 小数位数} */ const numberWithCommas = (number, options = {}) => { if (isNumber(number) || isString(number)) { const { digit = 0 } = options; let num; let prefix =''; if (isString(number)) { if (startsWith('+')(number)) { prefix = '+'; } num = parseFloat(number); } else { num = number; } if (isNumber(num) && !isNaN(num)) { const parts = num.toFixed(digit).toString().split('.'); parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ','); return prefix + parts.join('.'); } } return '--'; };
-->

# numberWithCommas 使用文档：

函数名：numberWithCommas

函数描述：将数字字段显示为带千位分隔符的形式。

参数：

number：要转换的数字或字符串。

options：可选参数对象，包含如下属性：

digit：小数位数，默认为0。
返回值：转换后的字符串。

示例：
```javascript
// 转换数字
numberWithCommas(1234567); // 返回 "1,234,567"
numberWithCommas(1234567.89, { digit: 2 }); // 返回 "1,234,567.89"

// 转换字符串
numberWithCommas('1234567'); // 返回 "1,234,567"
numberWithCommas('+1234567.89', { digit: 2 }); // 返回 "+1,234,567.89"

// 非法参数
numberWithCommas('abc'); // 返回 "--"
numberWithCommas(NaN); // 返回 "--"
```