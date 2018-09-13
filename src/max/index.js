/**
* This function should return max number in array
* @param {Array} arr - this is an array of numbers
* @return {number} - max number in array
* @example
* max([1, 2, 4]); // 4
* max([-1, 0]);   // 0
*/
const max = arr => {
  const newArr = []
  arr.forEach(function( val)  {
  	if (isFinite(val) && !isNaN(val)) return newArr.push(val);
  });
  return Math.max.apply(null, newArr);
};

export default max;
