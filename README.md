## Tencent AlloyTeam JavaScript Code Guide ESlint Configuration

## Installation

### Install Shareable Config

There are two configs contained in this repo:
* [@alloyteam/eslint-config-standard](https://github.com/steamerjs/code-lint/tree/master/packages/standard)
* [@alloyteam/eslint-config-react](https://github.com/steamerjs/code-lint/tree/master/packages/react)

```javascript
npm i --save-dev @alloyteam/eslint-config-standard
```

`@alloyteam/eslint-config-standard` has alread extend `@alloyteam/eslint-config-react`, so if you have already used the previous one, you don't have to use the other one.


### Global

```javascript
npm install -g eslint

eslint -c eslintrc.js xxx.js
```

### Local

```javascript
npm install --save-dev eslint

// in package.json
scripts: {
	lint: "eslint -c eslintrc.js xxx.js"
}

npm run lint
```

### Usage

* create .eslintrc.js file
* if you would like standard code guide, please copy and paste following content

```javascript
module.exports = {
    "extends": [
        "@alloyteam/eslint-config-standard",
    ]
};
```

* if you prefer react, please chnage the extends key value

```javasciprt
module.exports = {
    "extends": [
        "@alloyteam/eslint-config-react",
    ]
};
```


## Reference 
* [Alloyteam Code Guide](http://alloyteam.github.io/CodeGuide)
* [ESlint Code Guide](http://eslint.org/docs/user-guide/configuring)
* [ESlint Shareable Config](http://eslint.org/docs/developer-guide/shareable-configs)