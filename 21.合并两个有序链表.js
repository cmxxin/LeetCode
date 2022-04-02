/*
 * @lc app=leetcode.cn id=21 lang=javascript
 *
 * [21] 合并两个有序链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
  console.log(list1.val, list2, Array.isArray(list1), 111)
  while(list1 !== null) {
    console.log(list1.val)
    list1 = list1.next
  }
  let list = [...list1, ...list2].flat()
  list.sort((a, b) => a - b)
  return list
};
// @lc code=end

