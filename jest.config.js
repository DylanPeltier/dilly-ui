module.exports = {
  preset: 'ts-jest',  // This preset is specifically for TypeScript
  testEnvironment: 'jsdom',  // This simulates a browser-like environment for testing
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',  // Use ts-jest to transform TypeScript files
    '^.+\\.(js|jsx)$': 'babel-jest',  // Use babel-jest to transform JavaScript files
  },
  moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx'],  // Recognize these file extensions
  transformIgnorePatterns: ['<rootDir>/node_modules/'],  // Ignore node_modules by default
  moduleNameMapper: {
    "\\.(css|less)$": "<rootDir>/src/tests/styleMock.ts",
  },
};
