ESLint-plugin-v8-func-inline
===================

Node.js's V8 optimizer (crankshaft) inlines the functions whose body length, including the comments, is less than 600 characters.

# Installation

Install [ESLint](https://www.github.com/eslint/eslint) either locally or globally.

```sh
$ npm install eslint
```
Install the plugin.

```sh
$ npm install eslint-plugin-v8-func-inline
```

# Configuration

Add `plugins` section and specify ESLint-plugin-React as a plugin.

Set the max threshold for characters in your `.eslintrc` file
```json
rules : {
  "v8-func-inline/v8-func-inline" : [1, 615]
},
plugins: [
  "v8-func-inline"
]

```

# License

ESLint-plugin-v8-func-inline is licensed under the [MIT License](http://www.opensource.org/licenses/mit-license.php).
