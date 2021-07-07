/*
 * @lc app=leetcode.cn id=12 lang=javascript
 *
 * [12] 整数转罗马数字
 */

// @lc code=start
/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
  let code = {'1': 'I', '5': 'V', '10': 'X', '50': 'L', '100': 'C', '500': 'D', '1000': 'M'}
  let res = ''
  let times = 1
  while(num) {
    let x = num % 10
    let r = ''
    if (code[x * times]) {
      r = code[x * times]
    } else {
      for (let i = 1; i <= x; i++) {
        if (i === 4) {
          r = code[times] + code[5 * times]
        } else if (i == 5) {
          r = code[i*times]
        } else if (i === 9) {
          r = code[times] + code[times * 10]
        } else {
          r += code[times]
        }
      }
    }
    res = r + res
    num = ~~(num / 10)
    times *= 10
  }

  return res
};

// console.log(intToRoman(3)) // III
// console.log(intToRoman(4)) // IV
// console.log(intToRoman(9)) // IX
// console.log(intToRoman(58)) // LVIII
// console.log(intToRoman(1994)) // MCMXCIV
// @lc code=end

