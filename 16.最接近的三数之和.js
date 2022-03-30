/*
 * @lc app=leetcode.cn id=16 lang=javascript
 *
 * [16] 最接近的三数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
  nums = nums.sort((a,b) => a -b)
  let result = 0
  let min = null

  for (let i = 0; i < nums.length; i++) {
    let start = i + 1
    let end = nums.length - 1

    while (start < end) {
      const res = nums[i] + nums[start] + nums[end]
      const sum = Math.abs(res - target)
      if (min === null || sum < min) {
        min = sum
        result = res
      }
      if (res - target >= 0) {
        end--
      } else {
        start++
      }
    }
  }

  return result
}

// console.log(threeSumClosest([0,2,1,-3], 1))
// @lc code=end

