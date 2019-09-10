/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-10 11:47:51
 * @LastEditTime: 2019-09-10 15:55:07
 * @LastEditors: Please set LastEditors
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