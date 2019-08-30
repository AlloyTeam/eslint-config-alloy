module.exports = {
    rules: {
        /**
         * interface 和 type 定义时必须声明成员的类型
         * @category TypeScript
         */
        '@typescript-eslint/typedef': [
            'error',
            {
                arrayDestructuring: false,
                arrowParameter: false,
                memberVariableDeclaration: false,
                objectDestructuring: false,
                parameter: false,
                propertyDeclaration: true,
                variableDeclaration: false
            }
        ]
    }
};
