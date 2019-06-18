export type RuleNamespaces = 'index' | 'react' | 'vue' | 'typescript';

export const RuleNamespaceExtensionMap = {
    index: 'js',
    react: 'js',
    vue: 'vue',
    typescript: 'ts'
};

export const RuleNamespacePrismLanguageMap = {
    index: 'js',
    react: 'jsx',
    vue: 'html',
    typescript: 'ts'
};

export const RuleCategoryPriority = {
    'Possible Errors': 0,
    'Best Practices': 1,
    'Strict Mode': 2,
    Variables: 3,
    'Node.js and CommonJS': 4,
    'Stylistic Issues': 5,
    'ECMAScript 6': 6,
    React: 10,
    'JSX-specific': 11,
    'Enabling Correct ESLint Parsing': 20,
    'Error Prevention': 21,
    'Improving Readability': 22,
    'Minimizing Arbitrary Choices and Cognitive Overhead': 23,
    Uncategorized: 24,
    TypeScript: 30,
    '': 99
};

export type RuleCategory = keyof typeof RuleCategoryPriority;

export interface Rule {
    name: string;
    value: any;
    description: string;
    category: RuleCategory;
    reason?: string;
    fixable?: boolean;
    comments: string;
    badExample?: string;
    goodExample?: string;
    [key: string]: string | boolean | undefined;
}
