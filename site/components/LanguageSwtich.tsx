/* eslint-disable @typescript-eslint/no-require-imports */
import React, { ReactElement } from 'react';

import { newUrl } from '../utils';
import { languageOptions, Languages } from '../constants/languages';

interface LanguagesProps {
    language: Languages;
}

export const LanguageSwtich: React.SFC<LanguagesProps> = ({ language }) => {
    let renderItems: ReactElement[] = [];

    Object.entries(languageOptions).forEach(([key, value], index) => {
        if (key === language) {
            renderItems.push(<span key={key}>{value}</span>);
        } else {
            renderItems.push(
                <a key={key} className="site-language" href={newUrl({ query: { language: key } })}>
                    {value}
                </a>
            );
        }
        if (index < Object.keys(languageOptions).length - 1) {
            renderItems.push(
                <span key={key + '-separator'} className="site-language-separator">
                    /
                </span>
            );
        }
    });

    return <span className="site-languages">{renderItems}</span>;
};
