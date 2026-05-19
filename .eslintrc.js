module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
    jest: true  
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended"
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 2018,
    sourceType: "module"
  },
  plugins: [
    "react",
    "jest"
  ],
  rules: {
    indent: ["error", 2],
    linebreakStyle: ["error", "unix"],
    quotes: ["error", "single"],
    semi: ["error", "never"],
    eqeqeq: "error",
    noTrailingSpaces: "error",
    objectCurlySpacing: ["error", "always"],
    arrowSpacing: ["error", { before: true, after: true }],
    noConsole: "error",
    "react/prop-types": 0
  }
}
module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
    jest: true   // ✅ this alone is enough
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended"
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 2018,
    sourceType: "module"
  },
  plugins: [
    "react",
    "jest"
  ],
  rules: {
    indent: ["error", 2],
    linebreakStyle: ["error", "unix"],
    quotes: ["error", "single"],
    semi: ["error", "never"],
    eqeqeq: "error",
    noTrailingSpaces: "error",
    objectCurlySpacing: ["error", "always"],
    arrowSpacing: ["error", { before: true, after: true }],
    noConsole: "error",
    "react/prop-types": 0
  }
}
