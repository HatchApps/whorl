module.exports = {
    "env": {
        "browser": true,
        "es6": true,
        "amd": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:vue/essential",
    ],
    "parserOptions": {
        "sourceType": "module",
        "ecmaVersion": 2017,
        "ecmaFeatures": {
            "jsx": true,
            "spread": true,
            "experimentalObjectRestSpread": true
        }
    },
    "rules": {
        "no-unused-vars": "warn",
        "comma-spacing": "error",
        "indent": ["error", 4, { "SwitchCase": 1 }],
        "space-infix-ops": "error",
        //"keyword-spacing": ["error", { "before": true }],
        "key-spacing": ["error", {
            "beforeColon": false,
            "afterColon": true,
            "mode": "strict"
        }],
        "linebreak-style": ["error", "unix"],
        "no-multiple-empty-lines": "error",
        "no-multi-assign": "error",
        "no-trailing-spaces": "warn",
        "no-useless-escape": "off",
        "one-var": ["error", "never"],
        "padding-line-between-statements": [
            "error",
            { "blankLine": "always", "prev": "block-like", "next": "*" },
            { "blankLine": "always", "prev": "*", "next": "return" },
            { "blankLine": "always", "prev": ["const", "let", "var"], "next": "*" },
            { "blankLine": "always", "prev": "*", "next": ["const", "let", "var"] },
            { "blankLine": "any", "prev": ["const", "let", "var"], "next": ["const", "let", "var"] },
            { "blankLine": "never", "prev": "return", "next": "*" }
        ],
        "space-in-parens": ["error", "never"],
        "space-unary-ops": [
            "error", {
                "words": true,
                "nonwords": false
            }
        ],
        "quotes": ["error", "single"],
        "semi": ["error", "always"],
        "semi-spacing": ["error"],
        "space-before-blocks": ["error", "always"],
        "no-multi-spaces": ["error", { ignoreEOLComments: true }]
    },
    "globals": {
        "$": true,
        "jQuery": true,
        "__dirname": true,
        "process": true,
        "module": true
    }
};
