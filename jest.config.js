const { pathsToModuleNameMapper } = require('ts-jest');
const { compilerOptions } = require('./tsconfig.json');

const { baseUrl, paths } = compilerOptions;

module.exports = {
    testEnvironment: 'node',
    transform: {
        '^.+\\.tsx?$': '@swc/jest'
    },
    clearMocks: true,
    modulePaths: [baseUrl],
    moduleNameMapper: pathsToModuleNameMapper(paths),
    collectCoverage: false,
    testPathIgnorePatterns: ['/node_modules/', '/dist/']
};
