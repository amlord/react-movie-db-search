"use strict";

const path = require("path");

module.exports = {
  extends: "airbnb",
  globals: {
    document: true,
    window: true,
    jest: true,
    describe: true,
    it: true,
    expect: true
  },
  parser: "babel-eslint",
  rules: {
    "valid-jsdoc": 1,
    "strict": 0
  },
  settings: {
    "import/resolver": {
      webpack: {
        config: path.resolve(__dirname, "webpack.config.js"),
      },
    },
  },
}
