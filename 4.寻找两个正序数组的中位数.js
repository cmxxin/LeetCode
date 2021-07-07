/*
 * @lc app=leetcode.cn id=4 lang=javascript
 *
 * [4] 寻找两个正序数组的中位数
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
  const arr = nums1.concat(nums2).sort((a,b) => a -b)
  const len = arr.length
  const mid = (len / 2)
  return len % 2 !== 0 ? arr[mid | 0] : ((arr[mid -1] + arr[mid]) / 2)
};

// @lc code=end

