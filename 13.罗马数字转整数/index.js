/*
 * @Author: AndyLee
 * @Date: 2019-09-25 10:57:03
 * @LastEditTime: 2019-09-27 11:20:21
 */
/* 题目： 
罗马数字包含以下七种字符: I， V， X， L，C，D 和 M。

字符          数值
I             1
V             5
X             10
L             50
C             100
D             500
M             1000
例如， 罗马数字 2 写做 II ，即为两个并列的 1。12 写做 XII ，即为 X + II 。 27 写做  XXVII, 即为 XX + V + II 。

通常情况下，罗马数字中小的数字在大的数字的右边。但也存在特例，例如 4 不写做 IIII，而是 IV。数字 1 在数字 5 的左边，所表示的数等于大数 5 减小数 1 得到的数值 4 。同样地，数字 9 表示为 IX。这个特殊的规则只适用于以下六种情况：

I 可以放在 V (5) 和 X (10) 的左边，来表示 4 和 9。
X 可以放在 L (50) 和 C (100) 的左边，来表示 40 和 90。 
C 可以放在 D (500) 和 M (1000) 的左边，来表示 400 和 900。
给定一个罗马数字，将其转换成整数。输入确保在 1 到 3999 的范围内。

示例 1:

输入: "III"
输出: 3
示例 2:

输入: "IV"
输出: 4
示例 3:

输入: "IX"
输出: 9
示例 4:

输入: "LVIII"
输出: 58
解释: L = 50, V= 5, III = 3.
示例 5:

输入: "MCMXCIV"
输出: 1994
解释: M = 1000, CM = 900, XC = 90, IV = 4.

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/roman-to-integer
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/

/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {

  // 1. 最容易想到的列举法，这个非常的快，就是耗内存
  // let num = 0
  // for (let i = 0, len = s.length; i < len; i++) {
  //   if (s[i] == 'I') {
  //     if (s[i + 1] == 'V') {
  //       num = num + 4
  //       i++ // 因为IV代表4，已经把这个V的值统计过了，因此需要跳过去
  //     } else if (s[i + 1] == 'X') {
  //       num = num + 9
  //       i++
  //     } else {
  //       num = num + 1
  //     }
  //   } else if (s[i] == 'X') {
  //     if (s[i + 1] == 'L') {
  //       num = num + 40
  //       i++
  //     } else if (s[i + 1] == 'C') {
  //       num = num + 90
  //       i++
  //     } else {
  //       num = num + 10
  //     }
  //   } else if (s[i] == 'C') {
  //     if (s[i + 1] == 'D') {
  //       num = num + 400
  //       i++
  //     } else if (s[i + 1] == 'M') {
  //       num = num + 900
  //       i++
  //     } else {
  //       num = num + 100
  //     }
  //   } else if (s[i] == 'V') {
  //     num = num + 5
  //   } else if (s[i] == 'L') {
  //     num = num + 50
  //   }  else if (s[i] == 'D') {
  //     num = num + 500
  //   } else if (s[i] == 'M') {
  //     num = num + 1000
  //   } 
  // }
  // return num

  // 2. 根据规则判断，如果右边数字大于左边的，那么正常加上该罗马数字代表的整数即可，如果是右边大于左边，则需要减去右边数字
  let num = 0,
    obj = {
      'I': 1,
      'V': 5,
      'X': 10,
      'L': 50,
      'C': 100,
      'D': 500,
      'M': 1000,
    }
  for (var i = 0, len = s.length; i < len - 1; i++) {
    if (obj[s[i]] >= obj[s[i+1]]) { // 大多数情况的，写到if里面，会比较省时间
      num = num + obj[s[i]]
    } else {
      num = num - obj[s[i]]
    }
  }
  return num + obj[s[len - 1]]
};

console.log(romanToInt('III'))