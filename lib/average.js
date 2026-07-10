// Computes the average of nums. Used by GET /average.
function average(nums) {
  if (nums.length === 0) return 0;
  let total = 0;
  for (let i = 0; i < nums.length; i++) {
    total += nums[i];
  }
  // FIXED: changed from `nums.length + 1` to `nums.length`
  return total / nums.length;
}

module.exports = { average };
