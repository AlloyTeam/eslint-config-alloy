import * as React from 'react';
import ReactTooltip = require('react-tooltip');

const { useState, useEffect } = React;

import { RuleNamespaces } from '../constants/rule';
import { GitHubCorner } from './GitHubCorner';
import { RuleTable } from './RuleTable';

export const App: React.SFC = () => {
    const [namespace, updateNamespace] = useState<RuleNamespaces>('index');
    const [shouldHideOff, toggleShouldHideOff] = useState(false);

    useEffect(() => {
        ReactTooltip.rebuild();
    }, [namespace]);

    const Header = (
        <div className="flex-center">
            <div className="container-fluid">
                <h1>AlloyTeam ESLint 规则</h1>
                <form className="top-gap site-form">
                    <select
                        value={namespace}
                        onChange={(e) => updateNamespace(e.target.value as RuleNamespaces)}
                    >
                        <option value="index">标准规则</option>
                        <option value="react">React</option>
                        <option value="vue">Vue</option>
                        <option value="typescript">TypeScript</option>
                    </select>
                    <label>
                        <input
                            type="checkbox"
                            checked={shouldHideOff}
                            onChange={(e) => toggleShouldHideOff(e.target.checked)}
                        />
                        隐藏已禁用的规则
                    </label>
                </form>
            </div>
        </div>
    );

    return (
        <>
            <GitHubCorner href="https://github.com/AlloyTeam/eslint-config-alloy" />
            {Header}
            <RuleTable namespace={namespace} shouldHideOff={shouldHideOff} />
            <ReactTooltip
                className="site-react-tooltip"
                place="top"
                type="error"
                effect="solid"
                delayHide={100}
                html={true}
            />
        </>
    );
};
