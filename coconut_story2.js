const storyFinnish =
`
Sandra herä -si Coconut Garden saare -lla. 
Meri oli tyyni ja aurinko paisto -i. 
Sandra käveli keittiö -ön. 
Koira seura -si hän -tä. 
Aamiainen oli tunni -n päästä. 
Viera -at oli -vat tilann -eet kookos -vettä. 
Mutta missä kookos -pähkinä =t oli -vat? 
Sandra oli jättä -nyt ne pöydä -lle. 
Pöydä -llä oli nyt vain tyhjä tupakka -rasia.
`;

const storyFakeEnglish =
`
Sandra wake_up -did Coconut Garden island -on. 
Sea was calm and sun shine -did. 
Sandra walked kitchen -in. 
Dog follow -ed she -(object). 
Breakfast was hour -of away. 
Guest -s_the have -did order -ed coco -water. 
But where coco -nut =s are -did? 
Sandra had leave -did they table -onto. 
Table -on was now only empty cigarette -box.
`;

const storyEnglish =
`
Sandra woke up on Coconut Garden island.
The sea was calm and the sun was shining.
Sandra walked into the kitchen.
The dog followed her.
Breakfast was in an hour.
The guests had ordered coconut water.
But where were the coconuts?
Sandra had left them on the table.
There was only an empty cigarette pack on the table now. 
`;


function testingSentenceLengths () {
    const FinnishSentences = storyFinnish.split(".");
    const EnglishSentences = storyEnglish.split(".");
    //for (let i = 0; i < FinnishSentences.length; i++) {
    //    if (FinnishSentences[i].split(" ").length == EnglishSentences[i].split(" ").length) {console.log('Line ', i, 'ok. FI and EN equal length.')}
    //    else {console.log('WARNING: MISMATCHING SENTENCE LENGTH ON LINE ', i, '\n FI and EN sentence lengths are: ', FinnishSentences[i].split(" ").length, EnglishSentences[i].split(" ").length)}
    //}

}

testingSentenceLengths();

// Function to break strings by space and create word arrays
function createWordArrays() {
    const highlightWords = storyFinnish.split(" ");
    const highlightWords2 = storyFakeEnglish.split(" ");
    const highlightWords3 = storyEnglish.split(" ");
    
    return {
      highlightWords,
      highlightWords2,
      highlightWords3
    };
  }
  
  // Create the word arrays
  const { highlightWords, highlightWords2, highlightWords3 } = createWordArrays();
  