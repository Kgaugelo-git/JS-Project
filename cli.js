const fs = require('fs');

// Read the quotes from the JSON file
fs.readFile('quotes.json', 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading the quotes file:', err);
    return;
  }

  // Parse the JSON data
  const quotes = JSON.parse(data);

  // Get a random quote
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const randomQuote = quotes[randomIndex];

  // Print the random quote
  console.log(randomQuote);
});
