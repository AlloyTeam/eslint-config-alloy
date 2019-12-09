/* eslint-disable @typescript-eslint/no-require-imports */
import React, { useState, useEffect } from 'react';
import ReactTooltip = require('react-tooltip');

import { RuleNamespaces } from '../constants/rules';
import { GitHubCorner } from './GitHubCorner';
import { RuleTable } from './RuleTable';
import { LanguageSwtich } from './LanguageSwtich';
import { getLanguage, getQuery, newUrl, replaceUrl, defaultTo, t } from '../utils';

export const App: React.SFC = () => {
    const query = getQuery();
    const [namespace, setNamespace] = useState(
        defaultTo<RuleNamespaces>(query.rule, 'index', ['index', 'react', 'vue', 'typescript'])
    );
    const [hideOff, toggleHideOff] = useState(query.hideOff === '1');
    const language = getLanguage();

    useEffect(() => {
        document.documentElement.lang = language;
    }, []);

    useEffect(() => {
        ReactTooltip.rebuild();
    }, [namespace]);

    const Header = (
        <div className="flex-center">
            <div className="container-fluid">
                <h1 className="site-title">eslint-config-alloy</h1>
                <LanguageSwtich language={language} />
                <form className="top-gap site-form">
                    <select
                        value={namespace}
                        onChange={(e) => {
                            setNamespace(e.target.value as RuleNamespaces);
                            replaceUrl(newUrl({ query: { rule: e.target.value } }));
                        }}
                    >
                        <option value="index">{t('内置规则')}</option>
                        <option value="react">React</option>
                        <option value="vue">Vue</option>
                        <option value="typescript">TypeScript</option>
                    </select>
                    <label>
                        <input
                            type="checkbox"
                            checked={hideOff}
                            onChange={(e) => {
                                toggleHideOff(e.target.checked);
                                replaceUrl(newUrl({ query: { hideOff: e.target.checked } }));
                            }}
                        />
                        {t('隐藏已禁用的规则')}
                    </label>
                </form>
            </div>
        </div>
    );

    return (
        <>
            <GitHubCorner href="https://github.com/AlloyTeam/eslint-config-alloy" />
            {Header}
            <RuleTable namespace={namespace} hideOff={hideOff} />
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
