function Foo() {
  const MemoizedNestedComponent = React.useCallback(() => <div />, []);

  return (
    <div>
      <MemoizedNestedComponent />
    </div>
  );
}
