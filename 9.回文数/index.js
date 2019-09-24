/*
 * @Author: AndyLee
 * @Date: 2019-09-17 17:04:21
 * @LastEditTime: 2019-09-24 17:47:29
 */


/* 题目：
判断一个整数是否是回文数。回文数是指正序（从左向右）和倒序（从右向左）读都是一样的整数。

示例 1:

输入: 121
输出: true
示例 2:

输入: -121
输出: false
解释: 从左向右读, 为 -121 。 从右向左读, 为 121- 。因此它不是一个回文数。
示例 3:

输入: 10
输出: false
解释: 从右向左读, 为 01 。因此它不是一个回文数。
进阶:

你能不将整数转为字符串来解决这个问题吗？

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/palindrome-number
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/

/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  // 1 变成数组颠倒整个字符串
  // return x.toString().split('').reverse().join('') == x

  // 2 通过变成字符串，通过charAt比较前后的值
  // 下面这个还是需要转化为字符串。。。不过比上面的方法快一点
  // let str = x.toString()
  // let len = str.length
  // for (let i = 0; i <len /2;i++) {
  //   if (str.charAt(i) != str.charAt(len - 1 -i)) {
  //     return false
  //   }
  // }
  // return true

  // 3 根据leecode官方c#算法转换成js的算法（这个计算是不对的）
  // 使用这种方法会有个问题，计算出的不是整数，因此需要取整，也就变成4的方法
  // if(x < 0 || (x % 10 == 0 && x != 0)) {
  //   return false
  // }
  // let num = 0
  // while (x > num) {
  //   num = num * 10 + x % 10
  //   x /= 10
  // }
  // return x == num || x == num/10

  // 4 真正的js算法
  if(x < 0 || (x % 10 == 0 && x != 0)) {
    return false
  }
  let num = 0
  while (x > num) {
    num = Math.floor(num * 10 + x % 10)
    x = Math.floor(x/10)
  }
  return x == num || x == Math.floor(num/10)
};

console.log(isPalindrome(121))