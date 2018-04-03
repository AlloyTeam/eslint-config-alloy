// bad 有 setter 却没有对应的 getter
const foo = {
    set bar(value) {
        return 'bar ' + value;
    }
};