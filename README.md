## Tencent AlloyTeam JavaScript Code Guide ESlint Configuration

## Installation

### Install Shareable Config

There are two configs contained in this repo:
* @alloyteam/eslint-config-standard
* @alloyteam/eslint-config-react

```javascript
npm i --save-dev @alloyteam/eslint-config-standard
```


### Global

```javascript
npm install -g eslint

eslint -c eslintrc.js xxx.js
```

### Local

```javascript
npm install -g eslint

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
    "env": {},
    "extends": [
        "@alloyteam/eslint-config-standard",
    ],
    "plugins": [],
    "rules": {},
    "globals": {}
};
```

* if you prefer react, please chnage the extends key value

```javasciprt
module.exports = {
    "env": {},
    "extends": [
        "@alloyteam/eslint-config-react",
    ],
    "plugins": [],
    "rules": {},
    "globals": {}
};
```




## Reference 
[Alloyteam Code Guide](http://alloyteam.github.io/CodeGuide)
[ESlint Code Guide](http://eslint.org/docs/user-guide/configuring)
[ESlint Shareable Config](http://eslint.org/docs/developer-guide/shareable-configs)