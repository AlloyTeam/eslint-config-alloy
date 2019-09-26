ReactDOM.render(<Foo />, app);

class Foo extends React.Component {
    UNSAFE_componentWillMount() {}
    UNSAFE_componentWillReceiveProps() {}
    UNSAFE_componentWillUpdate() {}
}
