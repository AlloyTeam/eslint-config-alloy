doSomethingThatMightThrow();

try {
    doSomethingThatMightThrow();
} catch (e) {
    doSomethingBeforeRethrow();
    throw e;
}
