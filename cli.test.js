const fs = require('fs');
const { execSync } = require('child_process');

describe('Motivational Quote CLI', () => {
  beforeAll(() => {
    // Create a temporary quotes.json file for testing
    fs.writeFileSync('quotes.json', JSON.stringify([
      "Test quote 1.",
      "Test quote 2.",
      "Test quote 3."
    ]));
  });

  afterAll(() => {
    // Clean up the temporary quotes.json file
    fs.unlinkSync('quotes.json');
  });

  test('prints a random quote', () => {
    const output = execSync('./index.js').toString().trim();
    expect(["Test quote 1.", "Test quote 2.", "Test quote 3."]).toContain(output);
  });
});
