import type { ReactElement } from 'react';
import React from 'react';

import { newUrl } from '../utils';
import type { Languages } from '../../config';
import { languageOptions } from '../../config';

interface LanguagesProps {
  language: Languages;
}

/** 语言切换组件 */
export const LanguageSwitch: React.FC<LanguagesProps> = ({ language }) => {
  const renderItems: ReactElement[] = [];

  Object.entries(languageOptions).forEach(([key, value], index) => {
    if (key === language) {
      renderItems.push(<span key={key}>{value}</span>);
    } else {
      renderItems.push(
        <a key={key} className="site-language" href={newUrl({ query: { language: key } })}>
          {value}
        </a>,
      );
    }
    if (index < Object.keys(languageOptions).length - 1) {
      renderItems.push(
        <span key={key + '-separator'} className="site-language-separator">
          /
        </span>,
      );
    }
  });

  return <span className="site-languages">{renderItems}</span>;
};
