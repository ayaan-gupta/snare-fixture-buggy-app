// Sums every number in `nums`. Used by GET /sum.
function sum(nums) {
  let total = 0;
  // BUG: should be `i < nums.length` — this drops the last element.
  for (let i = 0; i < nums.length - 1; i++) {
    total += nums[i];
  }
  return total;
}

module.exports = { sum };
