// cli.test.js
const { execSync } = require('child_process');

test('prints a random quote', () => {
  const output = execSync('node cli.js').toString().trim();
  const expectedQuotes = [
    "Test quote 1.",
    "Test quote 2.",
    "Test quote 3."
  ];
  // Check if the output is one of the expected quotes
  expect(expectedQuotes).toContain(output);
});
