const test = require("node:test");
const assert = require("node:assert/strict");
const { sum } = require("../lib/sum");

test("sum adds every element, including the last one", () => {
  assert.strictEqual(sum([1, 2, 3, 4]), 10);
});
