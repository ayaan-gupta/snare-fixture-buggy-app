// Sums every number in `nums`. Used by GET /sum.
function sum(nums) {
  let total = 0;
  // FIXED: changed from `i < nums.length - 1` to `i < nums.length`
  for (let i = 0; i < nums.length; i++) {
    total += nums[i];
  }
  return total;
}

module.exports = { sum };
