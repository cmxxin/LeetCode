/*
 * @lc app=leetcode.cn id=15 lang=javascript
 *
 * [15] 三数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
  nums.sort((a, b) => a - b)

  const res = []
  const len = nums.length

  if (nums[0] <= 0 && nums[len - 1] >= 0 && len >= 3) {
    for(let i = 0; i < len - 2; i++) {
      if (nums[i] > 0) break
      if (i > 0 && nums[i] === nums[i - 1]) continue
      
      let first = i + 1
      let last = len - 1

      while(first < last) {
        const sum = nums[i] + nums[first] + nums[last]
        if (sum === 0) {
          res.push([nums[i], nums[first], nums[last]])
          while (first < last && nums[first] === nums[++first]) {}
          while (first < last && nums[last] === nums[--last]) {}
        } else if (sum < 0) {
          first++
        } else if (sum > 0) {
          last--
        }
      }
    }
  }

  return res
};
// @lc code=end

