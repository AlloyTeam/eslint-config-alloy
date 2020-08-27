module.exports = {
  rules: {
    /**
     * 禁止在 componentDidMount 里使用 setState
     * @reason 同构应用需要在 didMount 里使用 setState
     */
    'react/no-did-mount-set-state': 'off',
  },
};
