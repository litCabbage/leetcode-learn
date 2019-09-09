/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-09 14:50:22
 * @LastEditTime: 2019-09-09 17:29:33
 * @LastEditors: Please set LastEditors
 */
/**
 * @description: 无重复字符的最长子串
 * @param {string} s 
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let res = 0,
    temp = [],
    i = 0,
    len = s.length
  while (i < len) {
    if (temp.indexOf(s[i]) != -1) {
      temp.shift()
      continue
    } else {
      temp.push(s[i])
      i++
    }
    // res = Math.max(res, temp.length)
    res = res > temp.length ? res : temp.length // 比上述采用Math.max快
  }
  return res
  
}
console.log(lengthOfLongestSubstring('avgdd'))