module.exports = {
  root: true,
  env: {
    node: true,
    browser: true,
    es2021: true,
    "react-native/react-native": true,
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:import/recommended",
    "plugin:import/typescript",
    "prettier",
    "plugin:prettier/recommended",
  ],

  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: "latest",
    sourceType: "module",
  },

  plugins: [
    "react",
    "react-native",
    "@typescript-eslint",
    "import",
    "no-relative-import-paths",
    "unused-imports",
  ],
  ignorePatterns: ["!.*", "dist", "node_modules"],
  rules: {
    "react/react-in-jsx-scope": "off",
    "linebreak-style": ["error", "unix"],
    quotes: ["error", "double"],
    semi: ["error", "always"],
    "no-console": ["error"],
    "no-unused-vars": ["error", { vars: "all" }],
    "no-relative-import-paths/no-relative-import-paths": [
      "error",
      { allowSameFolder: true, prefix: "@" },
    ],
    "import/no-unresolved": "error",
    "import/no-named-as-default-member": "off",
    "import/no-named-as-default": "off",
    "import/order": [
      "error",
      {
        alphabetize: { order: "asc", caseInsensitive: true },
        pathGroups: [
          { pattern: "react/*", group: "builtin", position: "before" },
          { pattern: "react*", group: "builtin", position: "before" },
          { pattern: "@/*", group: "external", position: "after" },
        ],
        pathGroupsExcludedImportTypes: ["builtin"],
      },
    ],
    "sort-imports": [
      "error",
      {
        ignoreCase: true,
        ignoreDeclarationSort: true,
      },
    ],
    "unused-imports/no-unused-imports": "error",
  },

  settings: {
    react: {
      version: "detect",
    },
    "import/resolver": {
      typescript: {
        project: "./tsconfig.json",
      },
    },
  },
};
