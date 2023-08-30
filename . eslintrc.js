// CommonJS module
// module.exports = {
//     root: true,
//     parser: "@typescript-eslint/parser",
//     plugins: ["@typescript-eslint"],
//     extends: [
//         "eslint:recommended",
//         "plugin:@typescript-eslint/recommended",
//         "prettier",
//         "prettier/@typescript-eslint",
//     ],
//     rules: {
//         // Add custom rules here if needed
//     },
// };

// ES module
export default {
    root: true,
    parser: "@typescript-eslint/parser",
    plugins: ["@typescript-eslint"],
    extends: [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "prettier",
        "prettier/@typescript-eslint",
    ],
    rules: {
        // Add custom rules here if needed
    },
};
