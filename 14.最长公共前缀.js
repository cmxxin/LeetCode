/*
 * @lc app=leetcode.cn id=14 lang=javascript
 *
 * [14] 最长公共前缀
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  const len = strs.length
  if (len < 2) return strs[0] || ''

  let res = strs[0]
  for (let i = 1; i < len; i++) {
    let n = 0
    while(strs[i][n] && res[n]) {
      if (strs[i][n] !== res[n]) {
        break
      }
      n++
    }
    res = res.slice(0, n)
    if (!res) return ''
  }

  return res
};

// console.log(longestCommonPrefix(["flower","flow","flight"])) // "fl"
// console.log(longestCommonPrefix(["dog","racecar","car"])) // ""
// @lc code=end

