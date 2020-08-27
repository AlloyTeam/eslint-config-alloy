function foo(n) {
  if (n <= 0) {
    return;
  }
  arguments.callee(n - 1);
}
