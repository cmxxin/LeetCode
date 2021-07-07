/*
 * @lc app=leetcode.cn id=2 lang=javascript
 *
 * [2] 两数相加
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
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
  let newArr = new ListNode()
  let res = newArr
  let flag = 0

  while (l1 || l2 || flag) {
    const result = (l1?.val ?? 0) + (l2?.val ?? 0) + flag
    flag = result >= 10 ? 1 : 0
    if (l1) l1 = l1.next
    if (l2) l2= l2.next
    newArr.next = new ListNode(result % 10)
    newArr = newArr.next
  }

  return res.next
};


