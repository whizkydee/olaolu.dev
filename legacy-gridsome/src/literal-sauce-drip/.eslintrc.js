module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: ['plugin:vue/essential', '@vue/prettier'],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-case-declarations': 'off',
    'comma-dangle': ['off', 'always'],
    semi: ['warn', 'never'],
    'prettier/prettier': ['error', { endOfLine: 'auto' }],
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
}
