const { isNumber, isString, startsWith } = require('lodash/fp');

/** 
 * @description 数字字段显示千位分隔符
 * @param number
 * @param options object {digit: 小数位数}
 */
const numberWithCommas = (number, options = {}) => {
    if (isNumber(number) || isString(number)) {
      const { digit = 0 } = options;
      let num;
      let prefix ='';
      if (isString(number)) {
        if (startsWith('+')(number)) {
          prefix = '+';
        }
        num = parseFloat(number);
      } else {
        num = number;
      }
      if (isNumber(num) && !isNaN(num)) {
        const parts = num.toFixed(digit).toString().split('.');
        parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
        return prefix + parts.join('.');
      }
    }
    return '--';
};

console.log(numberWithCommas(10000))

module.exports = {
  numberWithCommas
}