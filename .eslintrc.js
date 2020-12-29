module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    es6: true,
    jest: true,
  },
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser',
  },
  extends: [
    'eslint:recommended',
    '@nuxtjs/eslint-config-typescript',
    'plugin:nuxt/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:vue/recommended',
    'plugin:prettier/recommended',
    'prettier/@typescript-eslint',
    'prettier/vue',
  ],
  plugins: ['vue', '@typescript-eslint', 'prettier'],
  // add your custom rules here
  rules: {
    'prettier/prettier': [
      'warn',
      {
        trailingComma: 'all',
        singleQuote: true,
        jsxSingleQuote: true,
        jsxBracketSameLine: true,
        printWidth: 120,
        tabWidth: 2,
        semi: true,
      },
    ],
    'nuxt/no-cjs-in-config': 'off',
    '@typescript-eslint/no-explicit-any': 'error',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-inferrable-types': 'warn',
    'max-len': [
      'warn',
      {
        code: 120,
        ignoreTrailingComments: true,
        ignoreUrls: true,
        ignoreTemplateLiterals: true,
        ignoreRegExpLiterals: true,
      },
    ],
    'no-extra-semi': 'error',
    'no-unexpected-multiline': 'error',
    'no-unreachable': 'error',
    'prefer-const': 'warn',
    'no-console': 'off',
  },
};
