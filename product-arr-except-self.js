const nums = [1, 2, 3, 4];

const productExceptSelf = function(nums) {
    const result = [];
    let prefix = 1; // Prefix product
  
    // Calculate prefix products (products from the left)
    for (let i = 0; i < nums.length; i++) {
      result[i] = prefix;
      prefix *= nums[i];
    }
  
    let postfix = 1; // Postfix product 
  
    // Calculate postfix products (products from the right), 
    // combining them with prefix products
    for (let i = nums.length - 1; i >= 0; i--) {
      result[i] *= postfix;
      postfix *= nums[i];
    }
  
    return result;
  };
  
console.log(productExceptSelf(nums));
