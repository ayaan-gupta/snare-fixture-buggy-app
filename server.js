const express = require("express");
const path = require("path");
const { init } = require("@getsnare/sdk");
const { sum } = require("./lib/sum");
const { average } = require("./lib/average");
const { double } = require("./lib/double");

init({ projectId: "k8jin03w72hjakjhn029h0lz" });

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

app.get("/double", (req, res) => {
  const nums = String(req.query.nums || "")
    .split(",")
    .filter(Boolean)
    .map(Number);
  res.json({ doubled: double(nums) });
});

if (require.main === module) {
  const port = process.env.PORT || 3000;
  app.listen(port, () => console.log(`snare-fixture-buggy-app listening on ${port}`));
}

module.exports = { app };
