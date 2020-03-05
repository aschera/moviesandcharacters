module.exports = {
	"extends": [
		"standard",
		"plugin:react/recommended"
	],
	"env": {
		"es6":     true,
        "browser": true,
        "node":    true,
        "mocha":   true
	},
	parser: 'babel-eslint',
	parserOptions: {
        ecmaVersion: 2018,
        "sourceType": "module",
        "ecmaFeatures": {
            "jsx": true
		},
		allowImportExportEverywhere: true
    },
    "rules": {
        "indent": [2, "tab", { "SwitchCase": 1 }],
		"template-curly-spacing": ["error", "always"],
		"no-trailing-spaces": "error",
		"no-tabs": 0,
		"mocha/no-exclusive-tests": "error",
		"space-before-function-paren": ["error", "never"],
		"no-control-regex": 0,
		"react/prop-types": 0
	},
	"plugins": [
		"mocha",
		"react"
	]
}
