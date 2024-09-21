module.exports = {
    extends: [
      'eslint:recommended',
      'plugin:react/recommended',
      'plugin:prettier/recommended' // Ensure Prettier rules are used
    ],
    rules: {
      // Your custom rules here
    },
    settings: {
      react: {
        version: 'detect' // Automatically detect the react version
      }
    }
  }
  