/*
 * @lc app=leetcode.cn id=13 lang=javascript
 *
 * [13] 罗马数字转整数
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
  let code = {I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000}
  let len = s.length - 1
  let res = code[s[len]]
  if (len < 1 ) return res

  for (let i = s.length - 2; i >= 0; i--) {
    const p = s[i]
    const n = s[i + 1]
    if (p === n) {
      res = res + code[p]
    } else {
      if (code[p] > code[n]) {
        res = res + code[p]
      } else {
        res = res - code[p]
      }
    }
  }
  return res
};

// console.log(romanToInt('III')) // 3
// console.log(romanToInt('IV')) // 4
// console.log(romanToInt('IX')) // 9
// console.log(romanToInt('LVIII')) // 58
// console.log(romanToInt('MCMXCIV')) // 1994

// @lc code=end

