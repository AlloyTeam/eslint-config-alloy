const foo = {
    set bar(value) {
        this.barValue = 'bar ' + value;
    },
    get bar() {
        return this.barValue;
    },
    baz: 1
};
