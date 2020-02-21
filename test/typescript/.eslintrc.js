module.exports = {
    extends: ['../base/.eslintrc.js'],
    parser: '@typescript-eslint/parser',
    plugins: ['@typescript-eslint'],
    rules: {
        'no-dupe-class-members': 'off',
        'no-empty-function': 'off',
        // https://github.com/typescript-eslint/typescript-eslint/issues/491
        'no-invalid-this': 'off',
        'no-magic-numbers': 'off',
        'no-unused-vars': 'off',
        'react/sort-comp': 'off'
    }
};
