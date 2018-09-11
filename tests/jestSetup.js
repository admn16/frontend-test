module.exports = {
  verbose: false,
  testEnvironment: 'node',
  moduleNameMapper: {
    '^src/(.*)': '<rootDir>/../src/$1',
    '^components/(.*)': '<rootDir>/../src/components/$1',
    '^containers/(.*)': '<rootDir>/../src/containers/$1',
    '^actions/(.*)': '<rootDir>/../src/actions/$1',
  },
  setupTestFrameworkScriptFile: '<rootDir>/setup.js',
};
