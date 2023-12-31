module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    'standard',
  ],
  globals: {
    _: 'readonly',
    axios: 'readonly',
    Base64: 'readonly',
    JSON5: 'readonly',
    Papa: 'readonly',
    Qs: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  rules: {
    'eol-last': ['error', 'always'],
    'no-return-await': 0, // 0 = off, 1 = warn, 2 = error
    'comma-dangle': ['error', {
      arrays: 'always-multiline',
      objects: 'always-multiline',
      imports: 'always-multiline',
      exports: 'always-multiline',
      functions: 'only-multiline',
    }],
  },
}