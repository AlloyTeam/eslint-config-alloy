import React from 'react';
import ReactDOM from 'react-dom';
import ruleIndex from './rules/index';

class App extends React.Component {
    render() {
        return (
            <table>
                <tbody>
                    {Object.keys(ruleIndex.rules).map((key) => (
                        <tr key={key}><td>{key}</td></tr>
                    ))}
                </tbody>
            </table>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
