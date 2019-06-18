import '../site/vendor/prism';
declare const Prism: any;

Prism.hooks.add('after-tokenize', (env: any) => {
    console.log(env);
});

const result = Prism.highlight(`let foo = 1;`, Prism.languages.js, 'js');

console.log(result);
