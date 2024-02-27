const maxProfit = (prices) => {
  let max = prices[1] - prices[0] > 0 || 0;
  let workingArr = prices.reverse();

  workingArr.map((el, i) => {
    let temp = workingArr;
    let minBuyingPrice;
    if (i < temp.length - 2) {
      minBuyingPrice = Math.min(...temp.slice(i + 1, workingArr.length));
    } 
    if (max <= el - minBuyingPrice) {
      max = el - minBuyingPrice;
    }
  });

  return max;
};

console.log(maxProfit(prices)); // 5
