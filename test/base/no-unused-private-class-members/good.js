class Foo1 {
  #usedMember = 42;
  method() {
    return this.#usedMember;
  }
}

class Foo2 {
  #usedMethod() {
    return 42;
  }
  anotherMethod() {
    return this.#usedMethod();
  }
}

class Foo3 {
  get #usedAccessor() {}
  set #usedAccessor(value) {}

  method() {
    this.#usedAccessor = 42;
  }
}
