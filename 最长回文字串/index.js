/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-10 16:54:08
 * @LastEditTime: 2019-09-16 16:32:04
 * @LastEditors: Please set LastEditors
 */
/**
 * @param {string} s
 * @return {string}
 */

/**暴力法start */
// function isPalindromic(s) {
//   let len = s.length
//   for (let i = 0; i < len / 2;i++) {
//     if (s.charAt(i) != s.charAt(len - 1 - i)) {
//       return false
//     }
//   }
//   return true
// }
// var longestPalindrome = function (s) {
//   let ans = '',
//     max = 0,
//     len = s.length
//   for (let i = 0; i < len; i++) {
//     for (let j = i + 1; j <= len; j++) {
//       let str = s.substring(i, j)
//       if (isPalindromic(str) && str.length >= max) {
//         ans = str
//         max = str.length
//       }
//     }
//   }
//   return ans
// };
/**暴力法end */

/**动态规划start */
// 有点复杂，还是没掌握好
var longestPalindrome = function (s) {
  if (s == '') return ''
  let origin = s,
    reverse = s.split('').reverse().join(''),
    len = s.length,
    arr = [],
    maxLen = 0,
    maxEnd = 0
  for (let i = 0; i < len; i++) {
    arr.push([])
    for (let j = 0; j < len; j++) {
      arr[i].push(0)
      if (origin.charAt(i) == reverse.charAt(j)) {
        if (i == 0 || j == 0) {
          arr[i][j] = 1
        } else {
          arr[i][j] = arr[i - 1][j - 1] + 1;
        }
      }
      if (arr[i][j] > maxLen) {
        let beforeRev = len - 1 - j
        if (beforeRev + arr[i][j] - 1 == i) {
          maxLen = arr[i][j]
          maxEnd = [i]
        }
      }
    }
  }
  return s.substring(maxEnd - maxLen + 1, maxEnd + 1);
}
/**动态规划end */



console.log(longestPalindrome('cbbd'))