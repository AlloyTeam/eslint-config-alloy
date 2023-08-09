module.exports = {
  rules: {
    /**
     * 使用 Object.hasOwn() 而不是 Object.prototype.hasOwnProperty.call()
     * @reason ES2022 的新接口，兼容性不太好
     */
    'prefer-object-has-own': 'off',
  },
};
