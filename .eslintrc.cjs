/* eslint-env node */
module.exports = {
  root: true,
  env: {
    "vue/setup-compiler-macros": true,
    es2021: true,
  },
  extends: [
    "plugin:vue/essential",
    "eslint:recommended",
    "@vue/eslint-config-typescript/recommended",
    "@vue/eslint-config-prettier",
  ],
  rules: {
    "vue/no-multiple-template-root": "off",
  },
  settings: {
    "vue-i18n": {
      localeDir: "./src/locales/*.(json|json5|yaml|yml)",
    },
    "import/resolver": {
      alias: [
        ["@", "./src"],
        ["@demos", "./src/demos"],
      ],
    },
  },
};
