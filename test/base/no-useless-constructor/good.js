class Foo {
  constructor() {
    doSomething();
  }
}
class Bar extends Foo {
  constructor(...args) {
    super(...args);
    doSomething();
  }
}
