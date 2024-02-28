// const productSum = (array, depth = 1) => {
//   let sum = 0;
//   for (const element of array) {
//     if (Array.isArray(element)) {
//       sum += productSum(element, depth + 1);
//     } else {
//       sum += element;
//     }
//   }
//   return sum * depth;
// };
//space complexity is O(d) where d is the greatest depth of the special arrays

//time complexity is O(n) where n is the total number of elements in the array including sub-elements

function productSum(array, depth = 1) {
  return (
    array.reduce((sum, el) => {
      if (Array.isArray(el)) {
        return sum + getSum(el, depth + 1);
      } else {
        return sum + el;
      }
    }, 0) * depth
  );
}

const array = [5, 2, [7, -1], 3, [6, [-13, 8], 4]];
console.log(productSum(array)); // 12
