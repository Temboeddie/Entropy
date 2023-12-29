const fs = require('fs');

fs.readFile('text.txt', 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading file:', err);
    return;
  }

  console.log('File content:', data);

  const entropy = calculateEntropy(data);
  console.log('Entropy:', entropy.toFixed(2));
});

function calculateEntropy(text) {
  const uniqueCharacters = [];
  const characterFrequencies = {};

  for (let i = 0; i < text.length; i++) {
    const character = text[i];
    if (!uniqueCharacters.includes(character)) {
      uniqueCharacters.push(character);
    }
    characterFrequencies[character] = (characterFrequencies[character] || 0) + 1;
  }

  const totalCharacters = text.length;
  let entropy = 0;

  for (let i = 0; i < uniqueCharacters.length; i++) {
    const character = uniqueCharacters[i];
    const frequency = characterFrequencies[character] / totalCharacters;
    entropy -= frequency * (Math.log2(frequency) || 0); // log2 instead of log

  }

  return entropy;
}
