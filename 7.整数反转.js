/*
 * @lc app=leetcode.cn id=7 lang=javascript
 *
 * [7] 整数反转
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {

  // string
  // const isMinus = x < 0 ? -1 : 1
  // const str = Math.abs(x).toString().split('')
  // const res = str.reverse().join('') * isMinus
  // if (res < Math.pow(-2, 31) || res > Math.pow(2, 31) -1) {
  //   return 0
  // }
  // return res

  // 官方实现
  let res = 0
  while(x) {
    const l = x % 10
    res = res * 10 + l
    x = ~~(x / 10)
  }

  if (res < Math.pow(-2, 31) || res > Math.pow(2, 31) - 1) {
    return 0
  }
  return res
};

// console.log(reverse(1534236469))
// console.log(reverse(-123))
// console.log(reverse(120))
// console.log(reverse(0))

// @lc code=end

