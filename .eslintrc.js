module.exports = {
    env: {
        browser: true,
        es2021: true
    },
    extends: ["plugin:react/recommended", "standard"],
    parser: "@typescript-eslint/parser",
    parserOptions: {
        ecmaFeatures: {
            jsx: true
        },
        ecmaVersion: "latest",
        sourceType: "module"
    },
    plugins: ["react", "@typescript-eslint"],
    rules: {
        semi: [2, "always"],
        indent: [0, 4],
        "space-before-function-paren": [
            "error",
            { anonymous: "always", named: "never" }
        ],
        "multiline-ternary": ["off"],
        quotes: [
            "error",
            "double",
            {
                allowTemplateLiterals: true,
                avoidEscape: true
            }
        ],
        "@typescript-eslint/no-use-before-define": "error",
        "@typescript-eslint/no-unused-vars": "error",
        "@typescript-eslint/no-redeclare": "error",
        "object-shorthand": 0,
        "no-redeclare": "off",
        "no-use-before-define": "off",
        "react/display-name": "off",
        "react/prop-types": 0,
        "no-debugger": "off"
    }
};
