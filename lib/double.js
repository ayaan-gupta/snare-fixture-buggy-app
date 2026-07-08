// Doubles every number in nums. Used by GET /double.
function double(nums) {
  // BUG: adds 1 instead of doubling — should be n * 2.
  return nums.map((n) => n + 1);
}

module.exports = { double };
