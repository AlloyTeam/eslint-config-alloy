module.exports = {
    rules: {
        /**
         * @memberof
         * @description 出现 jsx 的地方必须 import React
         * @off 已经在 no-undef 中限制了
         */
        'react/react-in-jsx-scope': 'off'
    }
};
