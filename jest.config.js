/** @type {import('ts-jest').JestConfigWithTsJest} **/
module.exports = {
  testEnvironment: "node",
  transform: {
    "^.+\\.tsx?$": ["ts-jest", {}],
  },
  testPathIgnorePatterns: [
    "/node_modules/",
    // "/src/tests/product.test.ts",
    "/src/tests/getById/not-found.test.ts",
    "/src/tests/getById/success.test.ts",
  ],
};