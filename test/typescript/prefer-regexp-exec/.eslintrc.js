module.exports = {
    rules: {
        /**
         * 使用 RegExp#exec 而不是 String#match
         * @category TypeScript
         * @requires-types-information
         */
        '@typescript-eslint/prefer-regexp-exec': 'off'
    }
};
