class Foo1 {
  private getBar3() {
    return this.bar3;
  }
  protected getBar2() {}
  public getBar1() {}
  public constructor() {
    console.log(Foo1.getFoo3());
    console.log(this.getBar3());
  }
  private bar3 = 'bar3';
  protected bar2 = 'bar2';
  public bar1 = 'bar1';
  private static getFoo3() {
    return Foo1.foo3;
  }
  protected static getFoo2() {}
  public static getFoo1() {}
  private static foo3 = 'foo3';
  protected static foo2 = 'foo2';
  public static foo1 = 'foo1';
}
