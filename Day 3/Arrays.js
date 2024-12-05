function getSecondLargest(nums) {
    // Complete the function
   const sorted = nums.sort((a,b) => a-b);
  const sortedArray = [...new Set(sorted)];
  return sortedArray[sortedArray.length-2];
}