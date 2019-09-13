module.exports = {
    rules: {
        /**
         * 禁止使用 hasOwnProperty, isPrototypeOf 或 propertyIsEnumerable
         * @reason hasOwnProperty 比较常用
         */
        'no-prototype-builtins': 'off'
    }
};
