// cli.test.js
const fs = require('fs');
const { execSync } = require('child_process');

describe('Motivational Quote CLI', () => {
  const quotesFilePath = 'quotes.json';

  beforeAll(() => {
    // Create a temporary quotes.json file for testing
    fs.writeFileSync(quotesFilePath, JSON.stringify([
      "Test quote 1.",
      "Test quote 2.",
      "Test quote 3."
    ]));
  });

  afterAll(() => {
    // Clean up the temporary quotes.json file
    fs.unlinkSync(quotesFilePath);
  });

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
});
