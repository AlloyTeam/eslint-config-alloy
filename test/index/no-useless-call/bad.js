foo.call(null, 1, 2, 3); // foo(1, 2, 3)
foo.apply(null, [1, 2, 3]); // foo(1, 2, 3)

foo.bar.call(foo, 1, 2, 3); // foo.bar(1, 2, 3);
foo.bar.apply(foo, [1, 2, 3]); // foo.bar(1, 2, 3);
