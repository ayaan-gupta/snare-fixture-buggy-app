const express = require("express");
const path = require("path");
const { sum } = require("./lib/sum");
const { average } = require("./lib/average");
const { double } = require("./lib/double");
const { max } = require("./lib/max");
const { track } = require("./lib/analytics");

const app = express();

app.use(express.static(path.join(__dirname, "public")));

app.get("/sum", (req, res) => {
  const nums = String(req.query.nums || "")
    .split(",")
    .filter(Boolean)
    .map(Number);
  const result = sum(nums);
  track("sum_computed", { count: nums.length });
  res.json({ sum: result });
});

app.get("/average", (req, res) => {
  const nums = String(req.query.nums || "")
    .split(",")
    .filter(Boolean)
    .map(Number);
  res.json({ average: average(nums) });
});

app.get("/double", (req, res) => {
  const nums = String(req.query.nums || "")
    .split(",")
    .filter(Boolean)
    .map(Number);
  res.json({ doubled: double(nums) });
});

app.get("/max", (req, res) => {
  const nums = String(req.query.nums || "")
    .split(",")
    .filter(Boolean)
    .map(Number);
  res.json({ max: max(nums) });
});

if (require.main === module) {
  const port = process.env.PORT || 3000;
  app.listen(port, () => console.log(`snare-fixture-buggy-app listening on ${port}`));
}

module.exports = { app };
