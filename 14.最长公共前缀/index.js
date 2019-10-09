/*
 * @Author: AndyLee
 * @Date: 2019-09-30 16:21:58
 * @LastEditTime: 2019-10-09 16:51:20
 */
/*
编写一个函数来查找字符串数组中的最长公共前缀。

如果不存在公共前缀，返回空字符串 ""。

示例 1:

输入: ["flower","flow","flight"]
输出: "fl"
示例 2:

输入: ["dog","racecar","car"]
输出: ""
解释: 输入不存在公共前缀。
说明:

所有输入只包含小写字母 a-z 。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/longest-common-prefix
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  // 1. 以某一个字符为标准，判断各字符串是否是以该字符串开头的，如果不是，那么从最后截取该字符，然后再判断
  if (strs.length == 0) {
    return ''
  }
  let str = strs[0],
    lenMin = str.length
  for (let i = 0, len = strs.length; i < len; i++) {
    for (let j = 0; j < lenMin; j++) {
      if (!strs[i].startsWith(str)) { // 判断当前字符是否是以截取的最小前缀开头的，如果不是，截取该字符串，如果符合，就不处理
        str = str.substring(0, str.length - 1)
        if (str == '') return ''
      }
    }
  }
  return str

  // 2. 水平扫描法
  if (strs.length == 0) {
    return ''
  }
  let str = strs[0]
  for (let i = 0; i < strs.length; i++) {
    while (strs[i].indexOf(str) != 0) {
      str = str.substring(0, str.length - 1)
      if (str == '') return '' // 这一步加不加都可以，但这样计算时间会少
    }
  }
  return str
};


console.log(longestCommonPrefix(["flower", "flow", "flwght"]))