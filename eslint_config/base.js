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
    plugins: ["simple-import-sort", "prettier", "jsdoc", "mui-path-imports"],
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
        "import/no-unresolved": ["error"],
        "import/extensions": "off",
        "no-param-reassign": ["warn", { props: false }],
        "max-classes-per-file": "warn",
        "react/jsx-filename-extension": "off",
        "react/forbid-prop-types": "off",
        "react/button-has-type": "off",
        "react/function-component-definition": [2, { namedComponents: "function-declaration" }],
        "mui-path-imports/mui-path-imports": "error",
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
    },
    overrides: [
        {
            files: ["*.ts", "*.tsx"],
            extends: [
                "eslint:recommended",
                "plugin:@typescript-eslint/eslint-recommended",
                "plugin:@typescript-eslint/recommended",
                "plugin:import/typescript",
            ],
            parser: "@typescript-eslint/parser",
            rules: {
                "@typescript-eslint/ban-ts-comment": "off",
                "import/no-absolute-path": "off",
                "import/extensions": "off",
                "react/forbid-prop-types": "off",
                "react/jsx-filename-extension": "off",
                "react/require-default-props": "off",
                "no-use-before-define": "off",
                "no-shadow": "off",
                "one-var": "off",
                "max-classes-per-file": "off",
                "@typescript-eslint/no-use-before-define": ["error"],
            },
            plugins: ["@typescript-eslint"],
        },
    ],
};
