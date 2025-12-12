const storyFinnish =
`
Filippiinei -llä on paljon saari -a. 
Saar -et ovat trooppisia. 
Joka paika -ssa on kookos -pähkinö =i -tä. 
Kookos -pähkinö =i -den sisä -llä on kookos -vettä. 
Kookos -vesi on super -juoma. 
Kookos -vesi sisältä -ä kaikki tärkeä -t mineraali -t. 
Miksi kookos -vesi on niin terveelli -stä? 
Miten kookos -pähkinä levisi kaiki -lle saari -lle? 
Ensinnäkin, mere -ssä on paljon ravinte -i =ta. 
Kookos -palmu on korkea -teknologi =nen tehdas. 
Se osaa erottaa meri -vede =stä suola -n ja muut mineraali -t. 
Toiseksi, kookos -pähkinä on kellu -va siemen. 
Se leviä -ä luonnollise -sti.
`;

const storyFakeEnglish =
`
The_Philippines -on have lots island -s. 
Island -s are tropical. 
Every place -in are coco -nut =s -some. 
Coco -nut =s -theirs in -on is coco -water. 
Coco -water is super -drink. 
Coco -water contain -s all important -s mineral -s. 
Why coco -water is so healthy -some? 
How coco -nut spread all -onto islands -onto? 
Firstly, sea -in is lots nutrient -s =some. 
Coco -palm is high -technologi =cal factory. 
It can separate sea -water =from salt -the and other mineral -s_the. 
Secondly, coco -nut is float -ing seed. 
It spread -s natural -ly.
`;

const storyEnglish =
`
The Philippines have a lot of islands.
The islands are tropical.
Every place has coconuts.
Inside coconuts, there is coconut water.
Coconut water is a super drink.
Coconut water contains all important minerals.
Why is coconut water so healthy? 
How did the coconut spread to all the islands?
Firstly, there are lots of nutrients in the sea.
The coconut palm is a high-tech factory.
It can separate salt and other minerals from sea water.
Secondly, the coconut is a floating seed.
It spreads naturally.
`;


function testingSentenceLengths () {
    const FinnishSentences = storyFinnish.split(".");
    const EnglishSentences = storyEnglish.split(".");
    for (let i = 0; i < FinnishSentences.length; i++) {
        if (FinnishSentences[i].split(" ").length == EnglishSentences[i].split(" ").length) {console.log('Line ', i, 'ok. FI and EN equal length.')}
        else {console.log('WARNING: MISMATCHING SENTENCE LENGTH ON LINE ', i, '\n FI and EN sentence lengths are: ', FinnishSentences[i].split(" ").length, EnglishSentences[i].split(" ").length)}
    }

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
  