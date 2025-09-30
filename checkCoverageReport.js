// check-coverage.js
const results = require("./jest-coverage.json");

const coverage = results.coverageMap
  ? (Object.values(results.coverageMap).reduce(
      (acc, file) => acc + Object.values(file.s).reduce((a, b) => a + b, 0),
      0
    ) /
      Object.values(results.coverageMap).reduce(
        (acc, file) => acc + Object.keys(file.s).length,
        0
      )) *
    100
  : 100;

console.log(`Calculated coverage: ${coverage}%`);

if (coverage < 90 || results.numFailedTests > 0) {
  console.error("Coverage too low or tests failed!");
  process.exit(1);
}
