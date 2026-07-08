// Computes the average of nums. Used by GET /average.
function average(nums) {
  if (nums.length === 0) return 0;
  let total = 0;
  for (let i = 0; i < nums.length; i++) {
    total += nums[i];
  }
  // BUG: should divide by nums.length — dividing by one too many skews the average low.
  return total / (nums.length + 1);
}

module.exports = { average };
