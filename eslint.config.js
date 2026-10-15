export default [
  {
    files: ["**/*.js"],
    languageOptions: {
      globals: {
        require: "readonly"
      }
    },
    rules: {
      "no-unused-vars": "warn",
      "no-undef": "error"
    }
  }
];