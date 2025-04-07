export default {
  displayName: '@functions/dcw-react',
  preset: '../jest.preset.js',
  transform: {
    '^.+\\.[tj]sx?$': ['babel-jest', { presets: ['@nx/react/babel'] }],
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  coverageDirectory: 'test-output/jest/coverage',
  collectCoverage: true,
  coverageReporters: ['html', 'text-summary'],
};
