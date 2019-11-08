module.exports = {
    extends: ['../../base.js'],
    parser: '@typescript-eslint/parser',
    plugins: ['@typescript-eslint'],
    rules: {
        // https://github.com/typescript-eslint/typescript-eslint/issues/491
        'no-invalid-this': 'off',
        'no-magic-numbers': 'off',
        'no-unused-vars': 'off',
        'react/sort-comp': 'off'
    }
};
