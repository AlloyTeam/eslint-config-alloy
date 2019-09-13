module.exports = {
    rules: {
        /**
         * 回调函数嵌套禁止超过 3 层，多了请用 async await 替代
         */
        'max-nested-callbacks': ['error', 3]
    }
};
