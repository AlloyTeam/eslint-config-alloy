Promise.reject('foo');

new Promise((resolve, reject) => {
  reject();
});

new Promise((resolve, reject) => {
  reject('foo');
});
