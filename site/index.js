import React from 'react';
import ReactDOM from 'react-dom';

import rulesIndex from './rules/index';
import ruleCommentsIndex from './rule-comments/index';
import ruleTestsIndex from './rule-tests/index';

class App extends React.Component {
    renderRule(key) {
        const isOff = ruleCommentsIndex[key].indexOf('@off') !== -1;
        return (
            <div key={key} className={`flex-left flex-wrap top-gap-big units-gap  ${isOff ? 'bg-faded site-table-row-wide' : ''}`}>
                <div className="unit-1-3 unit-1-on-mobile site-desc">
                    <a href={`https://eslint.org/docs/rules/${key}`}>
                        {key}
                    </a>
                    {this.renderRuleComment(ruleCommentsIndex[key])}
                </div>
                <div className="unit-1-3 unit-1-on-mobile">
                    {this.renderRuleTestBad(ruleTestsIndex[key])}
                </div>
                <div className="unit-1-3 unit-1-on-mobile">
                    {this.renderRuleTestGood(ruleTestsIndex[key])}
                </div>
            </div>
        );
    }
    renderRuleComment(comment) {
        let content = comment
            .replace(/ /g, '&nbsp;')
            .replace(/\r\n/g, '<br />').replace(/\n/g, '<br />')
            .replace('@off', '<span class="text-inverse bg-danger text-small site-comment-off">$&</span>')
            .replace('@fixable', '<span class="text-inverse bg-success text-small site-comment-fixable">$&</span>')
            .replace('禁止', '<strong class="text-danger">$&</strong>')
            .replace('必须', '<strong class="text-primary">$&</strong>');
        return (
            <p className="top-gap-0" dangerouslySetInnerHTML={{ __html: content }} />
        );
    }
    renderRuleTestGood(test) {
        if (!test || !test.good) return null;
        return (
            <pre className="language-javascript site-code">
                <code dangerouslySetInnerHTML={{
                    __html: test.good.replace(/(\/\/ )(good)/, '$1<span class="bg-success text-inverse site-code-tag">$2</span>')
                }}></code>
            </pre>
        );
    }
    renderRuleTestBad(test) {
        if (!test || !test.bad) return null;
        return (
            <pre className="language-javascript site-code">
                <code dangerouslySetInnerHTML={{
                    __html: test.bad.replace(/(\/\/ )(bad)/, '$1<span class="bg-danger text-inverse site-code-tag">$2</span>')
                }}></code>
            </pre>
        );
    }
    renderTableHead() {
        return (
            <div className="flex-left flex-wrap top-gap-big bg-faded units-gap site-table-head site-table-row-wide">
                <h3 className="unit-1-3 unit-1-on-mobile site-table-title">规则说明</h3>
                <h3 className="unit-1-3 unit-1-on-mobile text-danger site-table-title">错误的写法</h3>
                <h3 className="unit-1-3 unit-1-on-mobile text-success site-table-title">正确的写法</h3>
            </div>
        );
    }
    render() {
        return (
            <div className="flex-center">
                <div className="container-fluid site-container">
                    {this.renderTableHead()}
                    {Object.keys(rulesIndex.rules).map(this.renderRule.bind(this))}
                </div>
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
