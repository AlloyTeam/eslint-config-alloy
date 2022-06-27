class Foo1 {
  #unusedMember = 5;
}

class Foo2 {
  #usedOnlyInWrite = 5;
  method() {
    this.#usedOnlyInWrite = 42;
  }
}

class Foo3 {
  #usedOnlyToUpdateItself = 5;
  method() {
    this.#usedOnlyToUpdateItself++;
  }
}

class Foo4 {
  #unusedMethod() {}
}

class Foo5 {
  get #unusedAccessor() {}
  set #unusedAccessor(value) {}
}
