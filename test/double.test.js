const test = require("node:test");
const assert = require("node:assert/strict");
const { double } = require("../lib/double");

test("double doubles every number", () => {
  assert.deepStrictEqual(double([1, 2, 3]), [2, 4, 6]);
});
