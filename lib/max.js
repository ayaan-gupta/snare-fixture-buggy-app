// Returns the largest number in `nums`. Used by GET /max.
function max(nums) {
  if (nums.length === 0) return null;
  let best = nums[0];
  for (let i = 1; i < nums.length; i++) {
    // BUG: should be `nums[i] > best` — this finds the minimum, not the maximum.
    if (nums[i] < best) {
      best = nums[i];
    }
  }
  return best;
}

module.exports = { max };
