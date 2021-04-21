function Foo() {
  const foo = useMemo(() => ({ foo: 'bar' }), []);
  return <Bar.Provider value={foo}>Bar</Bar.Provider>;
}
