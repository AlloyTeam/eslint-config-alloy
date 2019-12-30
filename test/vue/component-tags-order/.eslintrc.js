module.exports = {
    rules: {
        /**
         * 组件中必须按照 <script>, <template>, <style> 排序
         * @reason 这是官方建议的顺序
         */
        'vue/component-tags-order': [
            'error',
            {
                order: ['script', 'template', 'style']
            }
        ]
    }
};
