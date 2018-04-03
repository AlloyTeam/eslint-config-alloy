// good setter 有对应的 getter
const foo = {
    set bar(value) {
        this.barValue = 'bar ' + value;
    },
    get bar() {
        return this.barValue;
    }
};

// good getter 可以没有对应的 setter
const bar = {
    get foo() {
        return this.fooValue;
    }
};