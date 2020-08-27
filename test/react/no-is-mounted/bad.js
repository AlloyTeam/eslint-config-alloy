class Foo extends React.Component {
  updateName() {
    if (this.isMounted()) {
      this.setState({});
    }
  }
}
