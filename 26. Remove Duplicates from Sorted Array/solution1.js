/**
 * @param {number[]} nums
 * @return {number}
 */
function removeDuplicates(nums) {
    if (nums.length === 0) return 0;

    // Pointer to place the next unique element
    let k = 0;

    // Iterate through the array
    for (let i = 1; i < nums.length; i++) {
        // If the current number is different from the last unique number
        if (nums[i] !== nums[k]) {
            k++; // Move the pointer
            nums[k] = nums[i]; // Update the unique element
        }
    }

    // Return the count of unique elements
    return k + 1;
}

console.log(removeDuplicates([0,0,1,1,1,2,2,3,3,4]));