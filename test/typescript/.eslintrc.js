module.exports = {
  extends: ['../base/.eslintrc.js'],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  rules: {
    // https://github.com/AlloyTeam/eslint-config-alloy/issues/241
    'no-undef': 'off',
    'react/sort-comp': 'off',
  },
};
