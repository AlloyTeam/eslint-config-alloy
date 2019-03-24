class Foo2 {
    constructor() {
        this.doSomething();
    }
    doSomething() {}
}

class Bar2 extends Foo1 {
    constructor() {
        super();
        this.doSomething();
    }
    doSomething() {}
}
