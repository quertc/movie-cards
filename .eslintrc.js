module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/recommended',
    '@vue/airbnb',
  ],
  parserOptions: {
    parser: 'babel-eslint',
  },
  rules: {
    'linebreak-style': ['error', (process.platform === 'win32' ? 'windows' : 'unix')],
    'arrow-parens': ['error', 'as-needed'],
    'max-len': 'off',
  },
};
