function foo() {
  try {
    return 1;
  } finally {
    // finally 会在 try 之前执行，故会 return 2
    return 2;
  }
}
