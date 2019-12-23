import en_US from './locale/en-US.json';

export type Languages = 'en-US' | 'zh-CN';
export const avaliableLanguages: Languages[] = ['en-US', 'zh-CN'];

export const languageOptions = {
    'en-US': 'English',
    'zh-CN': '简体中文'
};

export const locale = {
    'en-US': en_US,
    'zh-CN': {}
};
