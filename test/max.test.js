const test = require("node:test");
const assert = require("node:assert/strict");
const { max } = require("../lib/max");

test("max returns the largest element, not the smallest", () => {
  assert.strictEqual(max([3, 7, 2, 9, 4]), 9);
});
