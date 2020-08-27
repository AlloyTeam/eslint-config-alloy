Promise.reject(new Error('foo'));

new Promise((resolve, reject) => {
  reject(new Error('foo'));
});
