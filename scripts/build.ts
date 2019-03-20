import * as path from 'path';
import * as fs from 'fs';

import * as babylon from 'babylon';

const ruleNamespaces = ['index'];

class EslintrcBuilder {
    public build(namespace: 'index' | 'react' | 'vue') {}
}

const builder = new EslintrcBuilder();
builder.build('index');
