const foo = {
    set bar(value) {
        this.barValue = 'bar ' + value;
        return this.barValue;
    }
};
