module.exports = {
    rules: {
        /**
         * @memberof
         * @description 禁止在一个文件创建两个组件
         * @off 有一个 bug https://github.com/yannickcr/eslint-plugin-react/issues/1181
         */
        'react/no-multi-comp': 'off'
    }
};
