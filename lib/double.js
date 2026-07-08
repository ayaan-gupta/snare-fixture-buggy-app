// Doubles every number in nums. Used by GET /double.
function double(nums) {
  return nums.map((n) => n * 2);
}

module.exports = { double };
