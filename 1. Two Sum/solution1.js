/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
function twoSum(nums, target) {
    // Map to store number and its index
    const numToIndex = new Map();
    console.log({numToIndex});    
    // Iterate through the array
    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];
        const complement = target - num;
        
        // Check if the complement exists in the map
        if (numToIndex.has(complement)) {
            return [numToIndex.get(complement), i];
        }
        
        // Store the number and its index in the map
        numToIndex.set(num, i);
    }
}

console.log(twoSum([3,2,4], 6));