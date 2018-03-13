import React from 'react';
import ReactDOM from 'react-dom';

import rulesIndex from './rules/index';
import ruleCommentsIndex from './rule-comments/index';
import ruleTestsIndex from './rule-tests/index';

// const codeCharacter = '[ a-zA-Z0-9()=;<@/,?[{}``"!_+\'\\]\\-\\\\]';
// const codeCharacterWithoutSpace = '[a-zA-Z0-9()=;<@/,?[{}``"!_+\'\\]\\-\\\\]';
// const codeRegexp = new RegExp(`${codeCharacterWithoutSpace}${codeCharacter}+${codeCharacterWithoutSpace}`, 'g');

class App extends React.Component {
    renderRule(key) {
        const isOff = ruleCommentsIndex[key].indexOf('@off') !== -1;
        return (
            <div className={`flex-left flex-wrap top-gap-big ${isOff ? 'units-gap-big bg-faded' : 'units-gap'}`}>
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
        let content = comment;
        // content = content.replace(codeRegexp, (match) => {
        //     if (match === '@off' || match === '@fixable') return match;
        //     return `<code>${match}</code>`;
        // });
        content = content.replace(/ /g, '&nbsp;');
        content = content.replace(/\r\n/g, '<br />').replace(/\n/g, '<br />');
        content = content.replace('@off', '<span class="text-inverse bg-danger text-small site-comment-off">$&</span>');
        content = content.replace('@fixable', '<span class="text-inverse bg-success text-small site-comment-fixable">$&</span>');
        content = content.replace('禁止', '<strong class="text-danger">$&</strong>');
        content = content.replace('必须', '<strong class="text-primary">$&</strong>');
        return (
            <p className="top-gap-0" dangerouslySetInnerHTML={{ __html: content }} />
        );
    }
    renderRuleTestGood(test) {
        if (!test || !test.good) return null;
        return (
            <pre className="language-javascript site-good"><code dangerouslySetInnerHTML={{ __html: test.good }}></code></pre>
        );
    }
    renderRuleTestBad(test) {
        if (!test || !test.bad) return null;
        return (
            <pre className="language-javascript site-bad"><code dangerouslySetInnerHTML={{ __html: test.bad }}></code></pre>
        );
    }
    render() {
        return (
            <div className="flex-center">
                <div className="container-fluid">
                    {Object.keys(rulesIndex.rules).map(this.renderRule.bind(this))}
                </div>
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
