const storyFinnish =
`
Thaimaa on aurinkoi -nen maa. 
Thaimaa -ssa on hyvä -ä ruoka -a. 
Thaimaa -ssa on hieno -ja saari -a ja ranto -ja. 
Mutta Thaimaa on myös täynnä mysteere -jä. 
Yksi mysteeri on Mae Lai Sawan -in henki. 
Sano -taan, että Mae Lai Sawan -in mies kato -si. 
Joka ilta hän meni suure -n puu -n luokse lampu -n kanssa etsi -mään mies -tä =än. 
Lopulta lamppu sammu -i. 
Henki tulee ulos sumu -sta. 
Se esittää kysymyk -sen.
`;

const storyFakeEnglish =
`
Thailand is sun -ny country. 
Thailand -in have good -some food -some. 
Thailand -in has nice -many islands -many and beaches -many. 
But Thailand is also full_of mysteries -many. 
One mystery is Mae Lai Sawan -'s spirit. 
Said -it_is, that Mae Lai Sawan -'s man disappear -ed. 
Every evening she went large -'s tree -'s to_close_to lamp -'s with search -to man -(object) =hers. 
Finally lamp go_out -did. 
The_spirit comes out fog -from. 
It ask question -one. 
`;

const storyEnglish =
`
Thailand is a sunny country. 
Thailand has good food. 
Thailand has nice islands and beaches. 
But Thailand is also full of mysteries. 
One mystery is the spirit of Mae Lai Sawan. 
It is said, that Mae Lai Sawan's husband disappeared. 
Every evening she went to a large tree with a lamp. 
Finally, the lamp went out. 
The spirit comes out of the fog. 
It asks you a question.
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
  