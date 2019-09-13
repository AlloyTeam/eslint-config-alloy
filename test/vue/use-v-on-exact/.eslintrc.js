module.exports = {
    rules: {
        /**
         * 当一个节点上出现两个 v-on:click 时，其中一个必须为 exact
         */
        'vue/use-v-on-exact': 'error'
    }
};
