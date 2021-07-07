/*
 * @lc app=leetcode.cn id=3 lang=javascript
 *
 * [3] 无重复字符的最长子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  const len = s.length
  let max = 0
  if (len <= 1) return len

  let res =[]
  while(s) {
    const idx = res.indexOf(s[0])
    if (idx !== -1) {
      res = res.slice(idx + 1)
    }
    res.push(s[0])
    max = Math.max(res.length, max)
    s = s.slice(1)
  }
  return max
};

// @lc code=end

