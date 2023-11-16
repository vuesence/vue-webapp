import antfu from "@antfu/eslint-config";

export default antfu({
  ignores: [".vscode/settings.json", ".vscode/settings.json/**", "src/assets/locales/*.json", "src/assets/locales/*.json/**"],
  // stylistic: false,
  rules: {
    "ts/semi": "off",
    "curly": ["error", "all"],
    "no-console": "off",
    "no-alert": "off",
    // "ts/brace-style": ["error", "1tbs", { allowSingleLine: true }],
    // "ts/brace-style": "off",
    "vue/html-self-closing": "off",
    "style/semi": ["error", "always"],
    "style/indent": 2, // 4, or 'tab'
    "style/quotes": [
      "error",
      "double",
    ],
    "style/brace-style": ["error", "1tbs", { allowSingleLine: true }],
    // "style/brace-style": "off",
  },
  stylistic: {
  // "style/quotes": "double", // or 'single'
    // "style/brace-style": "off",
    // "object-curly-newline": "off",
  },
});
