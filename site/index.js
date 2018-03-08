import React from 'react';
import ReactDOM from 'react-dom';

import rulesIndex from './rules/index';
import ruleCommentsIndex from './rule-comments/index';
import ruleTestsIndex from './rule-tests/index';

// const codeCharacter = '[ a-zA-Z0-9()=;<@/,?[{}``"!_+\'\\]\\-\\\\]';
// const codeCharacterWithoutSpace = '[a-zA-Z0-9()=;<@/,?[{}``"!_+\'\\]\\-\\\\]';
// const codeRegexp = new RegExp(`${codeCharacterWithoutSpace}${codeCharacter}+${codeCharacterWithoutSpace}`, 'g');

class App extends React.Component {
    renderRuleTr(key) {
        const isOff = ruleCommentsIndex[key].indexOf('@off') !== -1;
        return (
            <tr key={key} className={isOff ? 'site-off' : ''}>
                <td className="site-key">
                    <a href={`https://eslint.org/docs/rules/${key}`}>
                        {key}
                    </a>
                </td>
                <td>{this.renderRuleComment(ruleCommentsIndex[key])}</td>
                <td>{this.renderRuleTestGood(ruleTestsIndex[key])}</td>
                <td>{this.renderRuleTestBad(ruleTestsIndex[key])}</td>
            </tr>
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
            <div dangerouslySetInnerHTML={{ __html: content }} />
        );
    }
    renderRuleTestGood(test) {
        if (!test) return null;
        return (
            <pre><code>{test.good}</code></pre>
        );
    }
    renderRuleTestBad(test) {
        if (!test) return null;
        return (
            <pre><code>{test.bad}</code></pre>
        );
    }
    render() {
        return (
            <div className="flex-center">
                <div className="container-fluid">
                    <table className="table">
                        <tbody>
                            {Object.keys(rulesIndex.rules).map(this.renderRuleTr.bind(this))}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
