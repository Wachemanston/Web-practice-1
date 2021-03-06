  module.exports = {
  "extends": "airbnb",
  "plugins": [
    "react",
    "import"
  ],
  "ignorePatterns": ["**/*.bundle.js"],
  "rules": {
    "arrow-body-style": 0,
    "no-use-before-define": 0,
    "no-alert": 0,
    "no-console": 0,
    "no-underscore-dangle": 0,
    "consistent-return": 0,
    "import/prefer-default-export": 0,
    "indent": ["error", 2],
    "function-paren-newline": 0,
    "no-mixed-operators": 0,
    "max-len": [2, {"code": 140}],
    "linebreak-style": ["off", "windows"],
    "react/jsx-file-name-extension": 0,
  },
  "parser": "babel-eslint",
  "globals": {
    "fetch": true,
    "alert": true,
    "__DEV__": true,
    "window": true
  },
  "env": {
    "es6": true,
  }
};
