/*
 * @lc app=leetcode.cn id=11 lang=javascript
 *
 * [11] 盛最多水的容器
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
  let res = 0
  let left = 0
  let right = height.length - 1

  while (left < right) {
    const min = Math.min(height[left], height[right])
    const times = right - left
    const r = min * times
    if (res < r) res = r
    if (height[left] <= height[right]) ++left
    else --right
  }

  return res
};
// console.log(maxArea([1,8,6,2,5,4,8,3,7])) // 49
// console.log(maxArea([1,1])) // 1
// console.log(maxArea([4,3,2,1,4])) //16
// console.log(maxArea([1,2,1])) // 2
// console.log(maxArea([1,2])) // 1
// console.log(maxArea([1, 2, 3, 4])) // 2
// @lc code=end

