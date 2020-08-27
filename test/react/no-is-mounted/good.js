class Foo extends React.Component {
  updateName() {
    if (this._isMounted) {
      this.setState({});
    }
  }
}
