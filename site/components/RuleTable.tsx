/* eslint-disable @typescript-eslint/no-var-requires */

import * as React from 'react';

import { Rule, RuleNamespaces, RuleNamespacePrismLanguageMap } from '../constants/rule';
import { parseDescription } from '../utils';

interface RuleTableProps {
    namespace: RuleNamespaces;
    shouldHideOff: boolean;
}

const configMap: {
    [key in RuleNamespaces]: {
        [key: string]: Rule;
    }
} = {
    index: require('../config/index.json'),
    react: require('../config/react.json'),
    vue: require('../config/vue.json'),
    typescript: require('../config/typescript.json')
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

export const RuleTable: React.SFC<RuleTableProps> = ({ namespace, shouldHideOff }) => {
    const currentConfig = configMap[namespace];
    return (
        <div className="container-fluid">
            <div className="flex-left flex-wrap units-gap hide-on-mobile">
                <h3 className="unit-1-3 unit-1-on-mobile site-table-header-text">规则说明</h3>
                <h3 className="unit-1-3 unit-1-on-mobile text-danger site-table-header-text">
                    错误的示例
                </h3>
                <h3 className="unit-1-3 unit-1-on-mobile text-success site-table-header-text">
                    正确的示例
                </h3>
            </div>
            {Object.values(currentConfig).map(
                ({ name, value, description, reason, badExample, goodExample }) => (
                    <div
                        key={name}
                        className={`flex-left flex-wrap top-gap-big units-gap site-row ${
                            value === 'off' ? 'site-row-off site-row-wide' : ''
                        }`}
                        style={
                            value === 'off' && shouldHideOff
                                ? {
                                      display: 'none'
                                  }
                                : {}
                        }
                    >
                        <div className="unit-1-3 unit-1-on-mobile site-desc">
                            <a href={docsUrlMap[namespace](name)}>{name}</a>
                            <p
                                className="top-gap-0"
                                dangerouslySetInnerHTML={{
                                    __html: parseDescription(description)
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
                        </div>
                        <div className="unit-1-3 unit-1-on-mobile">
                            {badExample && (
                                <pre
                                    className={`language-${
                                        RuleNamespacePrismLanguageMap[namespace]
                                    } site-code`}
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
                                    className={`language-${
                                        RuleNamespacePrismLanguageMap[namespace]
                                    }  site-code`}
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
