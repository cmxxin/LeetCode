/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const obj = {}
    let pos = []
  
    nums.forEach((num, i) => {
      if (obj[num] >= 0) {
        pos = [obj[num], i]
      } else {
        obj[target - num] = i
      }
    })
    return pos
};
// @lc code=end

