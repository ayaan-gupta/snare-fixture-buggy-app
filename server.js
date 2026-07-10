const express = require("express");
const path = require("path");
const { sum } = require("./lib/sum");
const { average } = require("./lib/average");
const { double } = require("./lib/double");

// Snare telemetry SDK init. NOTE: `npm install @snare/sdk` returned a real
// 404 from the public npm registry at the time this was added (@snare/sdk
// is not currently published there) — this call is wrapped defensively so
// the app still boots; it will start reporting once the package is
// installable.
try {
  const { init } = require("@snare/sdk");
  init({ projectId: "k8jin03w72hjakjhn029h0lz" });
} catch (err) {
  console.warn("[snare] @snare/sdk not installed yet:", err.message);
}

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
