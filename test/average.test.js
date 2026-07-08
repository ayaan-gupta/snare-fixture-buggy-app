const test = require("node:test");
const assert = require("node:assert/strict");
const { average } = require("../lib/average");

test("average divides by the correct count", () => {
  assert.strictEqual(average([2, 4, 6]), 4);
});
