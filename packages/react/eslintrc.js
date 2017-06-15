module.exports = {
    "extends": [
    	"@alloyteam/eslint-config-standard",
    ],

    "plugins": [
        "react"
    ],
    "rules": {
        "react/no-did-mount-set-state": 2,
        "react/no-did-update-set-state": 2,
        "react/no-redundant-should-component-update": 2,
        "react/no-will-update-set-state": 2,
        "react/require-render-return": 2,
        "react/jsx-closing-tag-location": 2,
        "react/jsx-closing-bracket-location": [2, {selfClosing: 'tag-aligned'}],
        "react/jsx-first-prop-new-line": 2,
        "react/jsx-key": 2,
        "react/jsx-no-bind": 2,
        "react/jsx-pascal-case": 2,
        "react/jsx-uses-vars": 2,
    },
    "globals": {
        "React": true,
        "ReactDOM": true,
    }
};