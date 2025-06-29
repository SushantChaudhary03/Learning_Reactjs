// jest.config.js
export default {
  transform: {
    '^.+\\.jsx?$': 'babel-jest' // ✅ no full path!
  },
  testEnvironment: 'jest-environment-jsdom',
  moduleFileExtensions: ['js', 'jsx'],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1'
  }
};
