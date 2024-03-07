function getSum(a, b) {
    while (b != 0) {
      const carry = (a & b) << 1; // Calculate carry (note: handles negative numbers in JS)
      a = a ^ b;            // Calculate sum without carry
      b = carry;            // Update carry 
    }
    return a;
  }