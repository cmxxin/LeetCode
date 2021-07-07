/*
 * @lc app=leetcode.cn id=5 lang=javascript
 *
 * [5] 最长回文子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
  if (s.length <=1) return s
  let res = []
  for (let i = 0; i < s.length; i++) {
    tt(i, i) // 单数 aba
    tt(i, i+1) // 偶数 aaaa
  }

  function tt(p, n) {
    // 一直向外扩散直接s[p]不等于s[n]
    // 如果s[p]等于s[n]则继续扩散直到不相等或到尽头为止
    while(p>=0 && n < s.length && s[p] === s[n]) {
      p--
      n++
    }
    // 判断找到的长度是否大于上一次存储的长度，如果是则替换
    if (n - p -1 > res.length) {
      res = s.slice(p + 1, n)
    }
  }

  return res
};

console.log(longestPalindrome('abaca')) // aba
console.log(longestPalindrome('babad')) //bab
console.log(longestPalindrome('aacabdkacaa')) //aca
console.log(longestPalindrome('ccc')) //ccc
console.log(longestPalindrome('aaaa')) //aaaa
console.log(longestPalindrome('tattarrattat')) //tattarrattat
// @lc code=end

