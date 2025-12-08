// Extract words from super_simple_version_text.js
// Note: This file should be loaded after super_simple_version_text.js

// Function to process words and combine words starting with - or = with previous word
function processWords(wordArray, leavedashes=false) {
  const processed = [];
  
  for (let i = 0; i < wordArray.length; i++) {
    const word = wordArray[i] //.trim();

    // Skip empty strings
    if (!word) continue;
    
    // If word starts with - or =, combine with previous word
    if (word.startsWith("-") || word.startsWith("=")) {
      if (processed.length > 0) {
        // Remove the leading - or = and combine with previous word if leavedashes is true
        if (leavedashes) {
          const combinedWord = processed[processed.length - 1] + word;
          processed[processed.length - 1] = combinedWord;
        } else {
          const combinedWord = processed[processed.length - 1] + word.slice(1);
          processed[processed.length - 1] = combinedWord;
        }
        
      } else {
        // If it's the first word, just remove the leading - or =
        // This should never happen as thes are endings and anyway the replace is too general
        // This is bad coding, but let be for now:
        console.log("Something dodgy is happening.")
        processed.push(word.replace(/^[-=]+/, ""));
      }
    } else {
      processed.push(word);
    }
  }
  
  return processed;
}

// Extract and process Finnish words
const finnishWords = processWords(highlightWords);

// Extract and process English words
const englishWords = processWords(highlightWords2, true);

// Only clean up leading single \n (not all whitespace or symbols) from each element in both arrays
for (let i = 0; i < finnishWords.length; i++) {
  if (typeof finnishWords[i] === 'string' && finnishWords[i].startsWith('\n')) {
    finnishWords[i] = finnishWords[i].substring(1);
  }
}
for (let i = 0; i < englishWords.length; i++) {
  if (typeof englishWords[i] === 'string' && englishWords[i].startsWith('\n')) {
    englishWords[i] = englishWords[i].substring(1);
  }
}


