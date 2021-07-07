/*
 * @lc app=leetcode.cn id=9 lang=javascript
 *
 * [9] 回文数
 */

// @lc code=start
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
  if (x < 0) return false
  if (x < 10) return true
  
  let res = 0
  let q = x
  while(x) {
    let l = x % 10
    res = res * 10 + l
    x = ~~(x / 10)
  }
  return res === q
  
};
// @lc code=end

