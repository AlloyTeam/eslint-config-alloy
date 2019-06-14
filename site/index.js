import React from 'react';
import ReactDOM from 'react-dom';

import GitHubCorners from './GitHubCorners';

import indexConfig from './config/index.json';
import reactConfig from './config/react.json';
import vueConfig from './config/vue.json';
import typescriptConfig from './config/typescript.json';

const RuleCategoryPriority = {
    'Possible Errors': 0,
    'Best Practices': 1,
    'Strict Mode': 2,
    Variables: 3,
    'Node.js and CommonJS': 4,
    'Stylistic Issues': 5,
    'ECMAScript 6': 6,
    React: 10,
    'JSX-specific': 11,
    'Enabling Correct ESLint Parsing': 20,
    'Error Prevention': 21,
    'Improving Readability': 22,
    'Minimizing Arbitrary Choices and Cognitive Overhead': 23,
    Uncategorized: 24,
    TypeScript: 30,
    '': 99
};

const rules = [
    ...indexConfig.map((v) => ({
        ...v,
        isOff: v.value === 'off',
        link: `https://eslint.org/docs/rules/${v.name}`,
        namespace: 'index'
    })),
    ...reactConfig.map((v) => ({
        ...v,
        isOff: v.value === 'off',
        link: `https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/${v.name.replace(
            'react/',
            ''
        )}.md`,
        namespace: 'react'
    })),
    ...vueConfig.map((v) => ({
        ...v,
        isOff: v.value === 'off',
        link: `https://github.com/vuejs/eslint-plugin-vue/blob/master/docs/rules/${v.name.replace(
            'vue/',
            ''
        )}.md`,
        namespace: 'vue'
    })),
    ...typescriptConfig.map((v) => ({
        ...v,
        isOff: v.value === 'off',
        link: `https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/${v.name.replace(
            '@typescript-eslint/',
            ''
        )}.md`,
        namespace: 'typescript'
    }))
];

const categories = Object.keys(RuleCategoryPriority);

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            ruleData: rules,
            namespace: 'all',
            category: 'all'
        };
        this.handleNamespaceChanged = this.handleNamespaceChanged.bind(this);
        this.handleCategoryChanged = this.handleCategoryChanged.bind(this);
        this.renderRule = this.renderRule.bind(this);
    }

    handleNamespaceChanged(e) {
        this.setRuleData(e.target.value, this.state.category);
    }

    handleCategoryChanged(e) {
        this.setRuleData(this.state.namespace, e.target.value);
    }

    setRuleData(namespace, category) {
        this.setState({
            namespace,
            category,
            ruleData: rules
                .filter((v) => (namespace === 'all' ? true : v.namespace === namespace))
                .filter((v) =>
                    category === 'all'
                        ? true
                        : category === 'off'
                        ? v.isOff
                        : v.category === category
                )
        });
    }

    renderRule(rule) {
        return (
            <div
                id={rule.name}
                key={rule.name}
                className="flex-left flex-wrap top-gap-big units-gap site-row"
            >
                <div className="unit-1-3 unit-1-on-mobile site-desc">
                    <a href={rule.link} target="_blank">
                        {rule.name}
                    </a>
                    {this.renderRuleDesc(rule)}
                </div>
                <div className="unit-1-3 unit-1-on-mobile">
                    {this.renderRuleCode(rule.badExample)}
                </div>
                <div className="unit-1-3 unit-1-on-mobile">
                    {this.renderRuleCode(rule.goodExample)}
                </div>
            </div>
        );
    }

    renderRuleDesc(rule) {
        const category = rule.category
            ? `<span class="text-inverse bg-danger text-small">${rule.category}</span><br />`
            : '';
        const declaration = (rule.description || '')
            .replace(/ /g, '&nbsp;')
            .replace(/\r\n/g, '<br />')
            .replace(/\n/g, '<br />')
            .replace('禁止', '<strong class="text-danger">$&</strong>')
            .replace('必须', '<strong class="text-primary">$&</strong>');
        const reason = (rule.reason ? '\n不启用原因: ' + rule.reason + '\n' : '').replace(
            '不启用',
            '<strong class="text-danger">$&</strong>'
        );
        const content = `${category}${declaration}<br />${reason}`;

        return <p className="top-gap-0" dangerouslySetInnerHTML={{ __html: content }} />;
    }

    renderRuleCode(code) {
        if (!code) return null;
        return (
            <pre className="language-javascript site-code">
                <code
                    dangerouslySetInnerHTML={{
                        __html: code
                            .replace(
                                /(\/\/ )(good)/g,
                                '$1<span class="bg-success text-inverse site-code-tag">$2</span>'
                            )
                            .replace(
                                /(\/\/ )(bad)/g,
                                '$1<span class="bg-danger text-inverse site-code-tag">$2</span>'
                            )
                    }}
                />
            </pre>
        );
    }

    renderTableHeader() {
        return (
            <div className="flex-left flex-wrap units-gap hide-on-mobile">
                <h3 className="unit-1-3 unit-1-on-mobile site-table-header-text">规则说明</h3>
                <h3 className="unit-1-3 unit-1-on-mobile site-table-header-text">错误的示例</h3>
                <h3 className="unit-1-3 unit-1-on-mobile site-table-header-text">正确的示例</h3>
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
                            <select
                                value={this.state.namespace}
                                onChange={this.handleNamespaceChanged}
                            >
                                <option value="all">全部</option>
                                <option value="index">标准规则</option>
                                <option value="react">React</option>
                                <option value="vue">Vue</option>
                                <option value="typescript">TypeScript</option>
                            </select>
                        </label>
                        <label>
                            切换规则类型：
                            <select
                                value={this.state.category}
                                onChange={this.handleCategoryChanged}
                            >
                                <option key="all" value="all">
                                    全部
                                </option>
                                <option key="off" value="off">
                                    不启用
                                </option>
                                {categories.map((v) => (
                                    <option key={v} value={v}>
                                        {v}
                                    </option>
                                ))}
                            </select>
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
                        {this.state.ruleData.map(this.renderRule)}
                    </div>
                </div>
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
