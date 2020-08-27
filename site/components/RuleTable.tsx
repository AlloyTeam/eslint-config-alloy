import React from 'react';

import { NAMESPACE_CONFIG, Namespace, Rule } from '../../config';
import { parseDescription, t } from '../utils';

interface RuleTableProps {
  namespace: Namespace;
  hideOff: boolean;
}

export const RuleTable: React.SFC<RuleTableProps> = ({ namespace, hideOff }) => {
  return (
    <div className="container-fluid">
      <div className="flex-left flex-wrap units-gap hide-on-mobile">
        <h3 className="unit-1-3 unit-1-on-mobile site-table-header-text">{t('规则说明')}</h3>
        <h3 className="unit-1-3 unit-1-on-mobile text-danger site-table-header-text">{t('错误的示例')}</h3>
        <h3 className="unit-1-3 unit-1-on-mobile text-success site-table-header-text">{t('正确的示例')}</h3>
      </div>
      {Object.values<Rule>(NAMESPACE_CONFIG[namespace].ruleConfig).map(
        ({
          name,
          value,
          description,
          reason,
          badExample,
          goodExample,
          fixable,
          extendsBaseRule,
          requiresTypeChecking,
        }) => (
          <div
            id={name}
            key={name}
            className={`flex-left flex-wrap top-gap-big units-gap site-row ${
              value === 'off' ? 'site-row-off site-row-wide' : ''
            }`}
            style={
              value === 'off' && hideOff
                ? {
                    display: 'none',
                  }
                : {}
            }
          >
            <div className="unit-1-3 unit-1-on-mobile site-desc">
              <a href={NAMESPACE_CONFIG[namespace].getDocsUrl(name)}>{name}</a>
              &nbsp;&nbsp;
              <span data-tip={t('可使用 --fix 自动修复')} data-type="success">
                {fixable && '🔧'}
              </span>
              <span data-tip={t('需要类型信息')} data-type="warning">
                {requiresTypeChecking && '💭'}
              </span>
              <a data-tip={t('继承自 ') + extendsBaseRule} data-type="warning" href={`?rule=base#${extendsBaseRule}`}>
                {extendsBaseRule && '👀'}
              </a>
              <a className="site-anchor" href={`#${name}`}>
                #
              </a>
              <p
                className="top-gap-0"
                dangerouslySetInnerHTML={{
                  __html: parseDescription(t(description)),
                }}
              />
              {reason && (
                <p
                  className="text-muted text-small"
                  style={{ marginTop: 5 }}
                  dangerouslySetInnerHTML={{
                    __html: parseDescription(reason),
                  }}
                />
              )}
              {Array.isArray(value) && (
                <div className="text-muted text-small site-rule-value">
                  {t('配置：')}
                  {typeof value[1] === 'object' ? (
                    <pre>
                      <code>{`["error", ${JSON.stringify(value[1], null, 4)}]`}</code>
                    </pre>
                  ) : (
                    <code>{`["error", ${JSON.stringify(value[1])}]`}</code>
                  )}
                </div>
              )}
            </div>
            <div className="unit-1-3 unit-1-on-mobile">
              {badExample && (
                <pre className={`language-${NAMESPACE_CONFIG[namespace].prismLanguage} site-code`}>
                  <code
                    dangerouslySetInnerHTML={{
                      __html: badExample,
                    }}
                  />
                </pre>
              )}
            </div>
            <div className="unit-1-3 unit-1-on-mobile">
              {goodExample && (
                <pre className={`language-${NAMESPACE_CONFIG[namespace].prismLanguage}  site-code`}>
                  <code
                    dangerouslySetInnerHTML={{
                      __html: goodExample,
                    }}
                  />
                </pre>
              )}
            </div>
          </div>
        ),
      )}
    </div>
  );
};
