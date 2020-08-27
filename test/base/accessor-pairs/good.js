const foo = {
  set bar(value) {
    this.barValue = 'bar ' + value;
  },
  get bar() {
    return this.barValue;
  },
};
const bar = {
  get foo() {
    return this.fooValue;
  },
};
