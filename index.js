module.exports = {
    extends: ["airbnb", "prettier", "eslint:recommended"],
    settings: {
        "import/resolver": {
            node: {
                paths: ["src"],
            },
            exports: {},
        },
    },
    parser: "@babel/eslint-parser",
    env: {
        browser: true,
        node: true,
        mocha: true,
    },
    plugins: ["simple-import-sort", "prettier", "jsdoc"],
    rules: {
        "prettier/prettier": "error",
        "array-element-newline": ["error", "consistent"],
        "no-plusplus": ["error", { allowForLoopAfterthoughts: true }],
        "object-curly-spacing": "error",
        "no-trailing-spaces": "error",
        "one-var": ["error", { uninitialized: "always", initialized: "never" }],
        "brace-style": ["error", "1tbs", { allowSingleLine: true }],
        "prefer-template": "off",
        camelcase: "off",
        "no-console": "off",
        "no-unused-expressions": "warn",
        "no-confusing-arrow": "off",
        "no-underscore-dangle": "off",
        "no-return-assign": "off",
        "consistent-return": "off",
        "arrow-body-style": "off",
        "import/prefer-default-export": "off",
        "import/no-named-as-default-member": "warn",
        "no-param-reassign": ["warn", { props: false }],
        "max-classes-per-file": "warn",
        "simple-import-sort/imports": [
            "warn",
            {
                groups: [
                    // Side effect imports.
                    ["^\\u0000"],
                    // Packages.
                    // Things that start with a letter (or digit or underscore), or `@` followed by a letter.
                    ["^@?\\w"],
                    // Absolute imports
                    [
                        "^(components|configs|constants|containers|domain|enhancers|hocs|libs|pages|reducers|services|store|modules|dictionaries)(/.*|$)",
                    ],
                    // Relative imports.
                    // Anything that starts with a dot.
                    ["^\\."],
                ],
            },
        ],
        indent: [
            "error",
            4,
            {
                SwitchCase: 1,
                ignoredNodes: ["TemplateLiteral"],
            },
        ],
        "comma-dangle": ["error", "always-multiline"],
        quotes: [1, "double", "avoid-escape"],
        "jsx-quotes": ["error", "prefer-double"],
        "max-len": [
            "error",
            100,
            4,
            {
                ignoreUrls: true,
                ignoreComments: true,
                ignoreTemplateLiterals: true,
                ignoreStrings: true,
            },
        ],
    },
};
