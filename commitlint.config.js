const fs = require("fs");
const path = require("path");

function detectScopes() {
  const basePaths = ["packages", "apps"];
  const scopes = [];

  for (const base of basePaths) {
    const folder = path.join(__dirname, base);

    if (fs.existsSync(folder)) {
      const dirs = fs
        .readdirSync(folder)
        .filter((x) => fs.statSync(path.join(folder, x)).isDirectory());

      scopes.push(...dirs);
    }
  }

  return scopes;
}

const dynamicScopes = [...detectScopes(), "root"];

module.exports = {
  extends: ["@commitlint/config-conventional"],
  rules: {
    // Enforce allowed scopes dynamically
    "scope-enum": [2, "always", dynamicScopes],
    "scope-empty": [2, "never"],
    "type-enum": [
      2,
      "always",
      ["feat", "fix", "style", "refactor", "chore", "ci", "perf", "revert"],
    ],
    "subject-case": [0],

    "body-leading-blank": [1, "always"],
    "body-max-line-length": [1, "always", 100],

    "footer-leading-blank": [1, "always"],
    "footer-max-line-length": [1, "always", 100],
  },
};

// <type>(<scope>): <subject>
// <BLANK LINE>
// <body>
// <BLANK LINE>
// <footer></footer>
