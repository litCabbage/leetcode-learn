/*
 * @Description: In User Settings Edit
 * @Author: AndyLee
 * @Date: 2019-09-04 17:29:29
 * @LastEditTime: 2019-09-04 17:57:53
 * @LastEditors: Please set LastEditors
 */
/**
 * @description: 无重复字符的最长子串
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let ans = 0,
    temp = [],
    i = 0
  while (i < s.length) {
    if (temp.indexOf(s[i]) > -1) {
      temp.shift()
      continue
    } else {
      temp.push(s[i])
    }
    ans = Math.max(ans, temp.length)
    i++
  }
  return ans
}

console.log(lengthOfLongestSubstring('abvcaghbgc') === 6, `最长子串的长度是${lengthOfLongestSubstring('abvcaghbgc')}`)