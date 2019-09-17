/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-16 17:13:04
 * @LastEditTime: 2019-09-16 19:15:58
 * @LastEditors: Please set LastEditors
 */
/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {
  if (numRows == 1) return s
  let r = Array(numRows).fill(''),
    c = (numRows - 1) * 2
  s.split('').forEach((l, i) =>
   r[i % c < numRows ? i % c : c - i % c] += l)
  return r.join('')
};

console.log(convert("PAYPALISHIRING", 3))