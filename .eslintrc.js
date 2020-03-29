module.exports = {
	"parser": "babel-eslint",
	"parserOptions": {
		"ecmaFeatures": {
			"experimentalObjectRestSpread": true,
			"jsx": true
		},
		"sourceType": "module"
	},
	"settings": {
		"ecmascript": 6,
    "jsx": true,
  	"import/resolver": {
    	"babel-module": {}
  	}
	},
	"env": {
		"browser": true,
		"es6": true,
		"node": true
	},
	"extends": [
		"eslint:recommended",
		"plugin:react/recommended",
		"@react-native-community"
	],
	"plugins": [
		"react",
		"react-native"
	],
	"rules": {
		'prettier/prettier': 0,
		"indent": ["error", "tab"],
		"linebreak-style": ["error", "unix"],
		"quotes": ["warn", "single"],
		"semi": ["error",	"never"],
		"curly": ["error", "multi-line", "consistent"],
		"brace-style": ["error", "stroustrup"],
		"comma-dangle": ["error", "always-multiline"],
		"yoda": ["error", "never"],
		"react/no-unused-prop-types": "error",
		"react/no-unused-state": "error",
		"react/default-props-match-prop-types": "error",
		"keyword-spacing": "error",
		"prefer-const": "error",
		"no-multi-spaces": "error",
		"object-curly-spacing": ["error", "always", {
		  "arraysInObjects": false,
		  "objectsInObjects": false
		}],
		"array-bracket-spacing": [2, "always", {
		  "objectsInArrays": false,
		  "arraysInArrays": false
		}],
		"arrow-body-style": ["error", "as-needed"],
		"arrow-spacing": "error",
    "react-native/no-inline-styles": 0,
		"prefer-destructuring": ["warn", {
      "array": false,
      "object": true
    }, {
      "enforceForRenamedProperties": false
    }]
	}
};
