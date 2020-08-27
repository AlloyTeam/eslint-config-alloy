Foo.prototype.__iterator__ = function () {
  return new FooIterator(this);
};
