/* eslint-disable @typescript-eslint/no-require-imports */
export type Languages = 'zh-CN' | 'en-US';
export const avaliableLanguages: Languages[] = ['zh-CN', 'en-US'];

export const languageOptions = {
    'zh-CN': '简体中文',
    'en-US': 'English'
};

export const locale = {
    'zh-CN': {},
    'en-US': require('../config/locale/en-US.json')
};
