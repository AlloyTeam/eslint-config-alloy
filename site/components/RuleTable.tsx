/* eslint-disable @typescript-eslint/no-require-imports */
import React from 'react';

import { Rule, RuleNamespaces, RuleNamespacePrismLanguageMap } from '../constants/rules';
import { parseDescription, t } from '../utils';

interface RuleTableProps {
    namespace: RuleNamespaces;
    hideOff: boolean;
}

const configMap: {
    [key in RuleNamespaces]: {
        [key: string]: Rule;
    };
} = {
    index: require('../config/rules/index.json'),
    react: require('../config/rules/react.json'),
    vue: require('../config/rules/vue.json'),
    typescript: require('../config/rules/typescript.json')
};

const docsUrlMap: { [key in RuleNamespaces]: (rule: string) => string } = {
    index: (rule) => `https://eslint.org/docs/rules/${rule}`,
    react: (rule) =>
        `https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/${rule.replace(
            /.*\//,
            ''
        )}.md`,
    vue: (rule) => `https://eslint.vuejs.org/rules/${rule.replace(/.*\//, '')}.html`,
    typescript: (rule) =>
        `https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/${rule.replace(
            /.*\//,
            ''
        )}.md`
};

export const RuleTable: React.SFC<RuleTableProps> = ({ namespace, hideOff }) => {
    const currentConfig = configMap[namespace];
    return (
        <div className="container-fluid">
            <div className="flex-left flex-wrap units-gap hide-on-mobile">
                <h3 className="unit-1-3 unit-1-on-mobile site-table-header-text">
                    {t('规则说明')}
                </h3>
                <h3 className="unit-1-3 unit-1-on-mobile text-danger site-table-header-text">
                    {t('错误的示例')}
                </h3>
                <h3 className="unit-1-3 unit-1-on-mobile text-success site-table-header-text">
                    {t('正确的示例')}
                </h3>
            </div>
            {Object.values(currentConfig).map(
                ({ name, value, description, reason, badExample, goodExample }) => (
                    <div
                        id={name}
                        key={name}
                        className={`flex-left flex-wrap top-gap-big units-gap site-row ${
                            value === 'off' ? 'site-row-off site-row-wide' : ''
                        }`}
                        style={
                            value === 'off' && hideOff
                                ? {
                                      display: 'none'
                                  }
                                : {}
                        }
                    >
                        <div className="unit-1-3 unit-1-on-mobile site-desc">
                            <a href={docsUrlMap[namespace](name)}>{name}</a>
                            <a className="site-anchor" href={`#${name}`}>
                                #
                            </a>
                            <p
                                className="top-gap-0"
                                dangerouslySetInnerHTML={{
                                    __html: parseDescription(t(description))
                                }}
                            />
                            {reason && (
                                <p
                                    className="text-muted text-small"
                                    style={{ marginTop: 5 }}
                                    dangerouslySetInnerHTML={{
                                        __html: parseDescription(reason)
                                    }}
                                />
                            )}
                            {Array.isArray(value) && (
                                <div className="text-muted text-small site-rule-value">
                                    {t('配置：')}
                                    {typeof value[1] === 'object' ? (
                                        <pre>
                                            <code>{`["error", ${JSON.stringify(
                                                value[1],
                                                null,
                                                4
                                            )}]`}</code>
                                        </pre>
                                    ) : (
                                        <code>{`["error", ${JSON.stringify(value[1])}]`}</code>
                                    )}
                                </div>
                            )}
                        </div>
                        <div className="unit-1-3 unit-1-on-mobile">
                            {badExample && (
                                <pre
                                    className={`language-${RuleNamespacePrismLanguageMap[namespace]} site-code`}
                                >
                                    <code
                                        dangerouslySetInnerHTML={{
                                            __html: badExample
                                        }}
                                    />
                                </pre>
                            )}
                        </div>
                        <div className="unit-1-3 unit-1-on-mobile">
                            {goodExample && (
                                <pre
                                    className={`language-${RuleNamespacePrismLanguageMap[namespace]}  site-code`}
                                >
                                    <code
                                        dangerouslySetInnerHTML={{
                                            __html: goodExample
                                        }}
                                    />
                                </pre>
                            )}
                        </div>
                    </div>
                )
            )}
        </div>
    );
};
