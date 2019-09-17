/**题目：
给出一个 32 位的有符号整数，你需要将这个整数中每位上的数字进行反转。

示例 1:

输入: 123
输出: 321
 示例 2:

输入: -123
输出: -321
示例 3:

输入: 120
输出: 21
注意:
假设我们的环境只能存储得下 32 位的有符号整数，则其数值范围为 [−231,  231 − 1]。请根据这个假设，如果反转后整数溢出那么就返回 0。
 */
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  let str = '',
    sign = '',
    origin = x.toString() // 将数字x转换成字符串
  if (x < 0) { // 判断是否是负数，如果是负数，截取负号后面的字符
    str = origin.substring(1)
    sign = origin.slice(0, 1) // 把这个负号截取出来，在下面判断的时候比直接用x<0判断节省时间
  } else {
    str = origin
  }
  // 通过将字符转换成数组然后反转，再转变成字符，这样可以实现反转，最后判断大小
  str = str.split('').reverse().join('')
  if (sign) {
    return sign + str < -Math.pow(2, 31) ? 0 : sign + str
  }
  return str > Math.pow(2, 31) - 1 ? 0 : str
};

console.log(reverse(-123))