// Doubles every number in nums. Used by GET /double.
function double(nums) {
  // FIXED: Changed from `n + 1` to `n * 2` to properly double each number.
  return nums.map((n) => n * 2);
}

module.exports = { double };
