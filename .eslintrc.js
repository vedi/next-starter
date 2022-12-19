module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: ['plugin:react/recommended', 'airbnb', 'plugin:storybook/recommended'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint'],
  rules: {
    '@typescript-eslint/no-unused-vars': ['error', {
      vars: 'all',
      args: 'after-used',
      ignoreRestSiblings: false,
    }],
    'import/extensions': 0,
    'import/no-extraneous-dependencies': ['error', {
      devDependencies: ['**/*.stories.tsx'],
    }],
    'import/no-unresolved': 0,
    'import/prefer-default-export': 0,
    'no-param-reassign': 0,
    'no-unused-vars': 'off',
    'react/jsx-filename-extension': [1, {
      extensions: ['.jsx', '.tsx'],
    }],
    'react/react-in-jsx-scope': 'off',
    'react/require-default-props': 'warn', // TODO: settle this
  },
};
