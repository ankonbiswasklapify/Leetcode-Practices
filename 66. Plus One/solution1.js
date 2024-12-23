/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    let number = parseInt(digits.toString().replace(/,/g, ""));
    let result = number + 1;
    let output = result.toString().split('').map(Number);
    return output;
};
//this solution won't work for large numbers. Check Solution 2
console.log(plusOne([6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,3]));