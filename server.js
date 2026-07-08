const express = require("express");
const path = require("path");
const { sum } = require("./lib/sum");
const { average } = require("./lib/average");

const app = express();

app.use(express.static(path.join(__dirname, "public")));

app.get("/sum", (req, res) => {
  const nums = String(req.query.nums || "")
    .split(",")
    .filter(Boolean)
    .map(Number);
  res.json({ sum: sum(nums) });
});

app.get("/average", (req, res) => {
  const nums = String(req.query.nums || "")
    .split(",")
    .filter(Boolean)
    .map(Number);
  res.json({ average: average(nums) });
});

if (require.main === module) {
  const port = process.env.PORT || 3000;
  app.listen(port, () => console.log(`snare-fixture-buggy-app listening on ${port}`));
}

module.exports = { app };
