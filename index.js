module.exports = {
    plugins: ["stylelint-no-unsupported-browser-features"],
    extends: [
        "stylelint-config-standard-scss",
        "stylelint-config-idiomatic-order",
        "stylelint-config-prettier",
        "stylelint-config-prettier-scss"
    ],
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
};

// TODO stylelint plugin like `eslint-plugin-import` find and install
