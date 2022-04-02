/*
 * @lc app=leetcode.cn id=17 lang=javascript
 *
 * [17] 电话号码的字母组合
 */

// @lc code=start
/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
  // let len = digits.length
  if (!digits) return []
  const reference = {
    2: ['a', 'b', 'c'],
    3: ['d', 'e', 'f'],
    4: ['g', 'h', 'i'],
    5: ['j', 'k', 'l'],
    6: ['m', 'n', 'o'],
    7: ['p', 'q', 'r', 's'],
    8: ['t', 'u', 'v'],
    9: ['w', 'x', 'y', 'z']
  }
  if (digits.length === 1) return reference[digits]

  let res = []
  const x = (str, i) => {
    if (i < 0) {
      res.push(str)
      return
    }
    const arr = reference[digits[i]]
    for (let j = 0; j < arr.length; j++) {
      x(arr[j] + str, i - 1)
    }
  }
  x('', digits.length - 1)
  return res
};
// @lc code=end

