export * from './build';
export * from './i18n';

export interface Rule {
  name: string;
  value: any;
  description: string;
  reason: string;
  badExample: string;
  goodExample: string;
  fixable: boolean;
  extendsBaseRule: string;
  requiresTypeChecking: boolean;
}
