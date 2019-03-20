module.exports = {
    rules: {
        /**
         * @memberof possible-errors
         * @description 禁止使用 hasOwnProperty, isPrototypeOf 或 propertyIsEnumerable
         * @off hasOwnProperty 比较常用
         */
        'no-prototype-builtins': 'off'
    }
};
