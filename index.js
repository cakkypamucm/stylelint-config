/* eslint sort-keys/sort-keys-fix: "error" */
/* eslint-disable sort-keys/sort-keys-fix */

module.exports = {
    plugins: ["stylelint-no-unsupported-browser-features"],
    extends: ["stylelint-config-standard-scss", "stylelint-config-idiomatic-order", "stylelint-config-prettier-scss"],
    /* eslint-enable sort-keys/sort-keys-fix */
    rules: {
        "color-hex-length": "long",
        "declaration-block-no-duplicate-properties": [
            true,
            {
                ignore: ["consecutive-duplicates-with-different-values"]
            }
        ],
        "font-family-name-quotes": "always-where-recommended",
        "import-notation": "string",
        "plugin/no-unsupported-browser-features": [
            true,
            {
                ignore: ["css-logical-props", "css-nesting", "css-overflow", "viewport-unit-variants"],
                ignorePartialSupport: false,
                severity: "warning"
            }
        ],
        "selector-pseudo-class-no-unknown": [
            true,
            {
                ignorePseudoClasses: ["export"]
            }
        ]
    }
    /* eslint-disable sort-keys/sort-keys-fix */
};
