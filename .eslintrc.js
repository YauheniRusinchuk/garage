module.exports = {
  env: {
    es6: true,
    browser: true,
    node: true,
  },
  settings: {
    "import/resolver": {
      node: {
        paths: ["src"],
      },
    },
  },
  extends: [
    "airbnb",
    "airbnb-typescript",
    "airbnb/hooks",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
    "prettier",
    "plugin:prettier/recommended",
    "plugin:sonarjs/recommended",
  ],
  plugins: [
    "react",
    "react-hooks",
    "jsx-a11y",
    "@typescript-eslint",
    "prettier",
    "sonarjs",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: "module",
    project: "./tsconfig.json",
  },
  rules: {
    "padding-line-between-statements": [
      "warn",
      { blankLine: "always", prev: "*", next: "return" },
    ],
    "arrow-body-style": "warn",
    "react/display-name": "off",
    "react/state-in-constructor": "off",
    "@typescript-eslint/unbound-method": "off",
    "@typescript-eslint/ban-types": [
      "error",
      {
        types: {
          "{}": false,
        },
      },
    ],
    "react/require-default-props": "off",
    "linebreak-style": "off",
    "prettier/prettier": ["error"],
    "import/no-extraneous-dependencies": [
      "error",
      {
        devDependencies: ["**/*.test.ts", "**/*.test.tsx", "**/setupTests.ts"],
      },
    ],
    "max-len": [
      "warn",
      {
        code: 100,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
        ignoreRegExpLiterals: true,
      },
    ],
    "lines-between-class-members": [
      "error",
      "always",
      {
        exceptAfterSingleLine: true,
      },
    ],
    "react/jsx-props-no-spreading": "off",
    "sonarjs/no-duplicated-branches": "off",
    "sonarjs/no-duplicate-string": "off",
    "no-param-reassign": [
      "error",
      { props: true, ignorePropertyModificationsFor: ["state"] },
    ],
    "sonarjs/cognitive-complexity": ["error", 46],
    "import/no-deprecated": "warn",
    "jsx-a11y/label-has-associated-control": "off",
    "jsx-a11y/click-events-have-key-events": "off",
    "jsx-a11y/interactive-supports-focus": "off",
    "jsx-a11y/no-static-element-interactions": [
      "error",
      {
        handlers: [
          "onMouseDown",
          "onMouseUp",
          "onKeyPress",
          "onKeyDown",
          "onKeyUp",
        ],
      },
    ],
    "@typescript-eslint/no-unsafe-member-access": "off",
    "no-return-await": "off",
    "no-await-in-loop": "off",
    "@typescript-eslint/return-await": "warn",
    "no-restricted-syntax": [
      "error",
      "WithStatement",
      "BinaryExpression[operator='in']",
    ],
  },
  overrides: [
    {
      files: ["**/*.tsx"],
      rules: {
        "react/prop-types": "off",
        "@typescript-eslint/no-unsafe-assignment": "off",
      },
    },
    {
      files: ["*.test.tsx"],
      rules: {
        "@typescript-eslint/no-unsafe-assignment": "off",
        "@typescript-eslint/no-unsafe-call": "off",
        "@typescript-eslint/require-await": "off",
      },
    },
  ],
};
