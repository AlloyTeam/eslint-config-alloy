class Foo2 {
    static foo = 'foo';
    static getFoo() {
        return Foo2.foo;
    }
    constructor() {}
    bar = 'bar';
    getBar() {}
    get baz() {
        return 'baz';
    }
    set baz(value) {
        console.log(value);
    }
}
