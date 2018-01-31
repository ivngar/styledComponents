module.exports = {
  parser: "babel-eslint",
  extends: ["@innocells/eslint-config/react", "prettier"],
  plugins: ["prettier"],
  rules: {
    "prettier/prettier": "error"
  },
  env: {}
};
