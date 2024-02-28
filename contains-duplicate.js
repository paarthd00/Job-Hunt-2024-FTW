const containsDuplicate = function (nums) {
  let uniqueLen = new Set(nums).size;
  return uniqueLen !== nums.length;
};
