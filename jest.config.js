

module.exports = {
  automock:                       true,

  collectCoverage:                true,
  collectCoverageFrom:            ['src/**/*.{js,jsx}'],
  coverageReporters:              ['html', 'json-summary'],

  resetMocks:                     true,
  resetModules:                   true,

  setupFiles:                 ['babel-polyfill', 'raf/polyfill', '<rootDir>/jest-setup.js'],
  snapshotSerializers:        ['enzyme-to-json/serializer'],

  unmockedModulePathPatterns:     [
      '<rootDir>/node_modules/immutable',
      '<rootDir>/node_modules/prop-types',
      '<rootDir>/node_modules/react',
      '<rootDir>/node_modules/react-dom',
      '<rootDir>/node_modules/react-redux',
      '<rootDir>/node_modules/enzyme',
      '<rootDir>/node_modules/enzyme-adapter-react-16',
      '<rootDir>/node_modules/enzyme-to-json'
  ]


};
