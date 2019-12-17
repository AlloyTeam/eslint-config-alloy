/* eslint-disable @typescript-eslint/no-require-imports */
export type Languages = 'en-US' | 'zh-CN';
export const avaliableLanguages: Languages[] = ['en-US', 'zh-CN'];

export const languageOptions = {
    'en-US': 'English',
    'zh-CN': '简体中文'
};

export const locale = {
    'en-US': require('../config/locale/en-US.json'),
    'zh-CN': {}
};
