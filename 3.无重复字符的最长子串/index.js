
/* 
给定一个字符串，请你找出其中不含有重复字符的 最长子串 的长度。

示例 1:

输入: "abcabcbb"
输出: 3 
解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。
示例 2:

输入: "bbbbb"
输出: 1
解释: 因为无重复字符的最长子串是 "b"，所以其长度为 1。
示例 3:

输入: "pwwkew"
输出: 3
解释: 因为无重复字符的最长子串是 "wke"，所以其长度为 3。
     请注意，你的答案必须是 子串 的长度，"pwke" 是一个子序列，不是子串。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/longest-substring-without-repeating-characters
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
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