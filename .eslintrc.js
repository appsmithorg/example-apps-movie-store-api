module.exports = {
  extends: '@loopback/eslint-config',
  rules: {
    camelcase: 'off',
    // "@typescript-eslint/camelcase": ["off"]
    '@typescript-eslint/naming-convention': [
      'off',
      {
        selector: 'default',
        format: null,
      },
    ],
  },
};
