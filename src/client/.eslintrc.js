module.exports = {
  "parser": "babel-eslint",
  "plugins": [
    "flowtype"
  ],
  "extends": [
    "airbnb",
    "plugin:flowtype/recommended"
  ],
  "env": {
    "browser": true,
  },
  "rules": {
    "indent": ["error", 2],
    "linebreak-style": ["error", "windows"],
    "comma-dangle": ["error", {
        "arrays": "only-multiline",
        "objects": "only-multiline",
        "imports": "only-multiline",
        "exports": "only-multiline",
        "functions": "ignore",
    }]
  }
};
