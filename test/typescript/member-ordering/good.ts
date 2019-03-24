class Foo2 {
    public static foo1 = 'foo1';
    protected static foo2 = 'foo2';
    private static foo3 = 'foo3';
    public static getFoo1() {}
    protected static getFoo2() {}
    private static getFoo3() {
        return Foo2.foo3;
    }
    public bar1 = 'bar1';
    protected bar2 = 'bar2';
    private bar3 = 'bar3';
    public constructor() {
        console.log(Foo2.getFoo3());
        console.log(this.getBar3());
    }
    public getBar1() {}
    protected getBar2() {}
    private getBar3() {
        return this.bar3;
    }
}
