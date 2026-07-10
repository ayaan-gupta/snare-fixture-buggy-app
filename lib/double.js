// Doubles every number in nums. Used by GET /double.
function double(nums) {
  // FIXED: changed from `n + 1` to `n * 2`
  return nums.map((n) => n * 2);
}

module.exports = { double };
