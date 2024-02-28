// const isAnagram = (s, t) => {
//   if (s.length !== t.length) {
//     return false;
//   } else {
//     const sCharMap = createCharMap(s);
//     const tCharMap = createCharMap(t);

//     for (let char in sCharMap) {
//       if (sCharMap[char] !== tCharMap[char]) {
//         return false;
//       }
//     }

//     return true;
//   }
// };

// const createCharMap = (str) => {
//   const charMap = {};

//   for (let char of str) {
//     if (charMap.hasOwnProperty(char)) {
//       charMap[char]++;
//     } else {
//       charMap[char] = 1;
//     }
//   }

//   return charMap;
// };

//Best Solution
/**
 * Space Complexity: O(26) (or simply O(1)).
 *
 * time complexity: O(n), where n is the length of the longer input string
 *
 */
const isAnagram = (s, t) => {
  if (s.length !== t.length) return false;

  const sCharMap = createCharMap(s);
  const tCharMap = createCharMap(t);
  console.log(sCharMap);
  console.log(tCharMap);
  return Object.keys(sCharMap).every(
    (char) => sCharMap[char] === tCharMap[char]
  );
};

const createCharMap = (str) => {
  return str.split("").reduce((charMap, char) => {
    charMap[char] = (charMap[char] || 0) + 1;
    return charMap;
  }, {});
};

const s = "anagram";
const t = "nagaram";

console.log(isAnagram(s, t));

/**
 const isAnagram = (s, t) => {
    return formatStr(s) === formatStr(t);
};

const formatStr = (str) => {
    return str.replace(/[^\w]/g, "").toLowerCase().split("").sort().join("");
};

   The time complexity of this solution is dominated by the sorting step, which is O(n log n) due to the use of sort().
   The space complexity is O(n) due to the creation of the formatted strings.
 */
