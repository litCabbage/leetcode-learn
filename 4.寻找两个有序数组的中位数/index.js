/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-10 11:47:51
 * @LastEditTime: 2019-09-17 16:46:51
 * @LastEditors: Please set LastEditors
 */
/* 
给定两个大小为 m 和 n 的有序数组 nums1 和 nums2。

请你找出这两个有序数组的中位数，并且要求算法的时间复杂度为 O(log(m + n))。

你可以假设 nums1 和 nums2 不会同时为空。

示例 1:

nums1 = [1, 3]
nums2 = [2]

则中位数是 2.0
示例 2:

nums1 = [1, 2]
nums2 = [3, 4]

则中位数是 (2 + 3)/2 = 2.5

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/median-of-two-sorted-arrays
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
  let nums = nums1.concat(nums2)
  nums.sort((a, b) => {
    return a - b
  })
  if (nums.length % 2 === 0) {
    return (nums[nums.length/2 - 1] + nums[nums.length/2])/2 // 索引需要-1
  } else {
    return nums[Math.floor(nums.length/2)] // 索引需要-1，因此向下取整
  }
};
console.log(findMedianSortedArrays([1,3], [2]))