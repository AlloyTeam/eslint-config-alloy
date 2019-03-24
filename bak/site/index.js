import React from 'react';
import ReactDOM from 'react-dom';

import GitHubCorners from './GitHubCorners';

import ruleConfigIndex from './rule-configs/index.js';
import ruleCommentIndex from './rule-comments/index.json';
import ruleTestIndex from './rule-tests/index.json';

import ruleeConfigReact from './rule-configs/react.js';
import ruleCommentReact from './rule-comments/react.json';
import ruleTestReact from './rule-tests/react.json';

const RULE_DATA_MAP = {
    index: {
        key: 'index',
        config: ruleConfigIndex,
        comment: ruleCommentIndex,
        test: ruleTestIndex,
        getDetailLink: (key) => {
            return `https://eslint.org/docs/rules/${key}`;
        }
    },
    react: {
        key: 'react',
        config: ruleeConfigReact,
        comment: ruleCommentReact,
        test: ruleTestReact,
        getDetailLink: (key) => {
            return `https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/${key.replace('react/', '')}.md`;
        }
    }
};

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            ruleData: RULE_DATA_MAP.index,
            showOff: true
        };
    }
    handleRuleSetChange(e) {
        this.setState({ ruleData: RULE_DATA_MAP[e.target.value] });
    }
    handleShowOffChange(e) {
        this.setState({
            showOff: e.target.checked
        });
    }
    renderRule(key) {
        const isOff = this.state.ruleData.comment[key].indexOf('@off') !== -1;
        if (isOff && !this.state.showOff) return null;
        return (
            <div id={key} key={key} className={`flex-left flex-wrap top-gap-big units-gap site-row ${isOff ? 'site-row-off site-row-wide' : ''}`}>
                <div className="unit-1-3 unit-1-on-mobile site-desc">
                    <a href={this.state.ruleData.getDetailLink(key)}>
                        {key}
                    </a>
                    {this.renderRuleComment(this.state.ruleData.comment[key])}
                </div>
                <div className="unit-1-3 unit-1-on-mobile">
                    {this.renderRuleTestBad(this.state.ruleData.test[key])}
                </div>
                <div className="unit-1-3 unit-1-on-mobile">
                    {this.renderRuleTestGood(this.state.ruleData.test[key])}
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
                    __html: test.good.replace(/(\/\/ )(good)/g, '$1<span class="bg-success text-inverse site-code-tag">$2</span>')
                }}></code>
            </pre>
        );
    }
    renderRuleTestBad(test) {
        if (!test || !test.bad) return null;
        return (
            <pre className="language-javascript site-code">
                <code dangerouslySetInnerHTML={{
                    __html: test.bad.replace(/(\/\/ )(bad)/g, '$1<span class="bg-danger text-inverse site-code-tag">$2</span>')
                }}></code>
            </pre>
        );
    }
    renderTableHeader() {
        return (
            <div className="flex-left flex-wrap units-gap hide-on-mobile">
                <h3 className="unit-1-3 unit-1-on-mobile site-table-header-text">规则说明</h3>
                <h3 className="unit-1-3 unit-1-on-mobile text-danger site-table-header-text">错误的示例</h3>
                <h3 className="unit-1-3 unit-1-on-mobile text-success site-table-header-text">正确的示例</h3>
            </div>
        );
    }
    renderHeader() {
        return (
            <div className="flex-center">
                <div className="container-fluid">
                    <h1>AlloyTeam ESLint 规则</h1>
                    <form className="top-gap site-form">
                        <label>
                            切换规则：
                            <select value={this.state.ruleData.key} onChange={this.handleRuleSetChange.bind(this)}>
                                <option value="index">标准规则</option>
                                <option value="react">React</option>
                            </select>
                        </label>
                        <label>
                            <input type="checkbox" checked={this.state.showOff} onChange={this.handleShowOffChange.bind(this)} />
                            显示已禁用的规则
                        </label>
                    </form>
                </div>
            </div>
        );
    }
    render() {
        return (
            <div>
                <GitHubCorners href="https://github.com/AlloyTeam/eslint-config-alloy" />
                {this.renderHeader()}
                <div className="flex-center">
                    <div className="container-fluid">
                        {this.renderTableHeader()}
                        {Object.keys(this.state.ruleData.config.rules).map(this.renderRule.bind(this))}
                    </div>
                </div>
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
