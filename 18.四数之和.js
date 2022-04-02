/*
 * @lc app=leetcode.cn id=18 lang=javascript
 *
 * [18] 四数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
  nums.sort((a, b) => a - b);
  let n = nums.length
  const res = []
  if (n < 4) return res;
  for (let i = 0; i < n - 3; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue;
    for (let j = i + 1; j < n - 2; j++) {
      let left = j + 1
      let right = n - 1
      if (j>i+1 && nums[j] === nums[j-1]) {
        continue
      }
      while(left < right) {
        const sum = nums[i] + nums[j] + nums[left] + nums[right]
        if (sum > target) {
          right--
          continue
        }
        if (sum < target ) {
          left++
          continue
        }
        res.push([nums[i] , nums[j] , nums[left] , nums[right]])
        left++
        right--
        while(nums[left] === nums[left -1]) {
          left++
        }
        while(nums[right] === nums[right+1]) {
          right--
        }
      }
    }
  }
  return res
};
// @lc code=end

