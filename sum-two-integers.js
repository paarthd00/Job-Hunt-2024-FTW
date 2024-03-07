/**
Given two integers a and b, return the sum of the two integers without using the operators + and -.

 

Example 1:

Input: a = 1, b = 2
Output: 3
Example 2:

Input: a = 2, b = 3
Output: 5
 

Constraints:

-1000 <= a, b <= 1000 



 */

function getSum(a, b) {
  while (b != 0) {
    const carry = (a & b) << 1; // Calculate carry (note: handles negative numbers in JS)
    a = a ^ b; // Calculate sum without carry
    b = carry; // Update carry
  }
  return a;
}
