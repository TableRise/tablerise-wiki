/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    modulePathIgnorePatterns: ['build'],
    coverageReporters: ['clover', 'json-summary', 'lcov', ['text', { skipFull: true }]],
    rootDir: './',
    modulePaths: ['<rootDir>'],
};
