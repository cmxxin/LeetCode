/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  const len = s.length
  if (len % 2 === 1) return false
  const tags = {
    '{': '}',
    '[': ']',
    '(': ')'
  }
  let arr = []
  for (let i = 0; i < len; i++) {
      if (tags[s[i]]) {
          arr.push(tags[s[i]])
      } else if (arr[arr.length - 1] === s[i]) {
          arr.pop()
      } else {
          return false
      }
  }
  return !arr.length
};
// @lc code=end

