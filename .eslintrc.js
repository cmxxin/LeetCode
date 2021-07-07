module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: ['plugin:vue/vue3-essential', 'airbnb-base', 'plugin:prettier/recommended'],
  parserOptions: {
    ecmaVersion: 12,
    parser: '@typescript-eslint/parser',
    sourceType: 'module'
  },
  plugins: ['@typescript-eslint'],
  rules: {
    'vue/no-unused-components': 'off',
    'vue/no-unused-vars': 'off',
    'vue/no-v-for-template-key-on-child': 'off',
    'vue/no-v-model-argument': 0,
    'vue/no-multiple-template-root': 0,
    'vue/no-v-for-template-key': 0,
    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/camelcase': 'off',
    '@typescript-eslint/ban-ts-ignore': 'off',
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'import/extensions': 0,
    'import/no-extraneous-dependencies': 0,
    'import/no-unresolved': 0,
    'no-underscore-dangle': 0,
    'no-param-reassign': 0,
    camelcase: 0,
    'no-throw-literal': 0,
    'class-methods-use-this': 0,
    'prefer-promise-reject-errors': 0,
    'import/prefer-default-export': 0,
    'no-return-assign': 0,
    'no-unused-expressions': 0,
    'consistent-return': 0,
    'no-use-before-define': 0
  }
}
