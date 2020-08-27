(() => {
  console.log(foo);
})();
const foo = 1;
console.log(foo);

bar();
function bar() {}

(() => {
  new Baz();
})();
class Baz {}
new Baz();
