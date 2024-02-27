/**
1. Two Sum

Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

Example 1:

Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
Example 2:

Input: nums = [3,2,4], target = 6
Output: [1,2]
Example 3:

Input: nums = [3,3], target = 6
Output: [0,1]
 

Constraints:

2 <= nums.length <= 104
-109 <= nums[i] <= 109
-109 <= target <= 109
Only one valid answer exists.
 

Follow-up: Can you come up with an algorithm that is less than O(n2) time complexity?

 */

// Classic JS dev solution
// const twoSum = (nums, target) => {
//     return nums.map((el, i) => {
//         const indexOfSecondNum = nums.indexOf(nums.find((e, j) => e + el === target && j !== i));
//         if (indexOfSecondNum >= 0 && indexOfSecondNum > i) {
//             return [i, indexOfSecondNum]
//         } else if (indexOfSecondNum >= 0 && indexOfSecondNum < i) {
//             return [indexOfSecondNum, i]
//         }
//     })
//     .filter((el) => el !== undefined)
//     .pop()
// };

// Hash Map Solution
// const twoSum = (nums, target) => {
//     const seen = {}; 

//     for (let i = 0; i < nums.length; i++) {
//         const complement = target - nums[i];
//         if (complement in seen) {
//             return [seen[complement], i];
//         }
//         seen[nums[i]] = i;  
//     }
// };

//Recursive Hash Map
function twoSum(nums, target) {
    function findPair(nums, target, i, seen) {
        if (i === nums.length) {
            return null; 
        }

        const complement = target - nums[i];

        if (complement in seen && seen[complement] !== i) {
            return [seen[complement], i];
        }

        seen[nums[i]] = i;
        return findPair(nums, target, i + 1, seen);
    }

    return findPair(nums, target, 0, {});
}


