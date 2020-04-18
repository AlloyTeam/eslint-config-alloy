import url from 'url';
import cookie from 'cookie';
import querystring from 'querystring';
import { locale, avaliableLanguages, Languages } from '../config';

/**
 * 解析描述或原因，转换 <, >, \n 等字符串
 * @param str 需要解析的文本
 */
export function parseDescription(str: string) {
    const language = getLanguage();
    const description = str.replace(/\</g, '&lt;').replace(/\>/g, '&gt;');
    if (language === 'zh-CN') {
        return description
            .replace(/[a-zA-Z0-9\(\)\[\]\{\}\\\/'"_\-\+\?\.\*!=\&\@\#%~:; ]+/g, (codes) => {
                const matchSpaces = codes.match(/^( *)(.*?)( *)$/);
                if (matchSpaces === null) {
                    return `<code>${codes}</code>`;
                }
                if (matchSpaces[2].startsWith('http')) {
                    return `${matchSpaces[1]}<a href="${matchSpaces[2]}" target="_blank">${matchSpaces[2]}</a>${matchSpaces[3]}`;
                }
                return `${matchSpaces[1]}<code>${matchSpaces[2]}</code>${matchSpaces[3]}`;
            })
            .replace(/\n/g, '<br />')
            .replace(/禁止/g, '<strong style="color:#db5757; font-weight:600;">$&</strong>')
            .replace(/必须/g, '<strong style="color:#267fd9; font-weight:600;">$&</strong>');
    } else {
        let isOpen = false;
        return description
            .replace(/\n/g, '<br />')
            .split('')
            .map((letter) => {
                if (letter !== '`') {
                    return letter;
                }
                isOpen = !isOpen;
                if (isOpen) {
                    return '<code>';
                }
                return '</code>';
            })
            .join('');
    }
}

/** 翻译 */
export function t(str: string) {
    const language = getLanguage();
    return (locale as any)[language][str] || str;
}

/** 从 query 和 cookies 获取 language */
export function getLanguage(): Languages {
    let language: any;
    const queryLanguage = getQuery().language;
    if (Array.isArray(queryLanguage)) {
        language = queryLanguage[queryLanguage.length - 1];
    } else {
        language = queryLanguage;
    }

    // 非法的 queryLanguage
    if (!avaliableLanguages.includes(language)) {
        language = cookie.parse(document.cookie).language;
        // 非法的 cookieLanguage
        if (!avaliableLanguages.includes(language)) {
            language = avaliableLanguages[0];
        }
    }

    setCookie('language', language);
    return language;
}

export function getQuery() {
    return querystring.parse(location.search.replace(/^\?/, ''));
}

function setCookie(name: string, value: string, days = 365) {
    const cookieObject = cookie.parse(document.cookie);
    if (cookieObject[name] === value) {
        return;
    }
    let expires = '';
    if (days) {
        const date = new Date();
        date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
        expires = '; expires=' + date.toUTCString();
    }
    document.cookie = name + '=' + (value || '') + expires + '; path=/';
}

interface UrlOptions {
    path?: string;
    query?: {
        [key: string]: string | boolean;
    };
}

/** 生成新的 url */
export function newUrl({ path, query }: UrlOptions) {
    const parsedUrl = url.parse(location.href, true);

    const newUrlObject = {
        pathname: parsedUrl.pathname || '',
        query: parsedUrl.query
    };
    if (path) {
        newUrlObject.pathname = url.resolve(newUrlObject.pathname, path);
    }
    if (query) {
        Object.entries(query).forEach(([key, value]) => {
            if (value === false) {
                delete newUrlObject.query[key];
            } else if (value === true) {
                newUrlObject.query[key] = '1';
            } else {
                newUrlObject.query[key] = value;
            }
        });
    }

    // 排序 query
    const newQuery: querystring.ParsedUrlQuery = {};
    Object.entries(newUrlObject.query)
        .sort(([aKey], [bKey]) => aKey.localeCompare(bKey))
        .forEach(([key, value]) => {
            newQuery[key] = value;
        });
    newUrlObject.query = newQuery;

    return url.format(newUrlObject);
}

export function replaceUrl(url: string, title?: string) {
    history.replaceState({}, title || document.title, url);
}

/** 若为空则返回默认值，可提供取值范围 */
export function defaultTo<T>(source: any, defaultValue: T, avaliableValues?: T[]): T {
    if (typeof source === 'undefined') {
        return defaultValue;
    }
    if (source === null) {
        return defaultValue;
    }
    if (typeof source === 'number' && isNaN(source)) {
        return defaultValue;
    }
    if (typeof avaliableValues !== 'undefined') {
        if (!avaliableValues.includes(source)) {
            return defaultValue;
        }
    }
    return source;
}
