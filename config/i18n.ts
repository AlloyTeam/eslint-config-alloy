import en_US from './locale/en-US.json';

export type Languages = 'zh-CN' | 'en-US';
export const avaliableLanguages: Languages[] = ['zh-CN', 'en-US'];

export const languageOptions = {
    'zh-CN': '简体中文',
    'en-US': 'English'
};

export const locale = {
    'zh-CN': {},
    'en-US': en_US
};
