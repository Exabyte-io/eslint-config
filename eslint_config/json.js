module.exports = {
    extends: ["./base.js"],
    ignorePatterns: ["dist/js/**/*.js", "dist/js/**/*.ts", "dist/js/**/*.d.ts", "src/js/types.ts"],
    overrides: [
        {
            // JavaScript and TypeScript files
            files: ["*.js", "*.ts", "*.tsx"],
            rules: {
                "prettier/prettier": "error",
            },
        },
        {
            // JSON files
            files: ["schemas/**/*.json", "example/**/*.json"],
            parser: "jsonc-eslint-parser",
            plugins: ["jsonc"],
            rules: {
                // JSON formatting rules
                "jsonc/indent": ["error", 4],
                "jsonc/no-comments": "error",
                "jsonc/key-spacing": [
                    "error",
                    {
                        beforeColon: false,
                        afterColon: true,
                    },
                ],
                "jsonc/comma-dangle": ["error", "never"],
                "jsonc/array-bracket-spacing": ["error", "always"],
                "jsonc/array-element-newline": [
                    "error",
                    {
                        multiline: true,
                        minItems: 1,
                    },
                ],
                // Disable prettier for JSON files and set specific options
                "prettier/prettier": [
                    "off",
                    {
                        singleQuote: false,
                        trailingComma: "none",
                        bracketSpacing: true,
                        printWidth: 100,
                    },
                ],
            },
        },
    ],
};
