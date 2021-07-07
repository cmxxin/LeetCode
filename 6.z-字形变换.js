/*
 * @lc app=leetcode.cn id=6 lang=javascript
 *
 * [6] Z 字形变换
 */

// @lc code=start
/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
  let len = s.length
  if (numRows < 2 || len < numRows) return s
  let res = new Array(len).fill('')
  
  let n = numRows * 2 - 2
  for (let i = 0; i < len; i++) {
    let x = i % n
    res[Math.min(x, n-x)] += s[i]
  }

  return res.join('')
};

// console.log(convert('PAYPALISHIRING', 7))
// @lc code=end

