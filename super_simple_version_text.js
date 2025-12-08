// Story text strings
/*const storyFinnish = `Hei maailma, oppiminen on hauskaa. 
Hei maailma, oppiminen on hauskaa.
Hei maailma, oppiminen on hauskaa.
`;

const storyFakeEnglish = `
Hello world, learning is fun. 
Hello world, learning is fun. 
Hello world, learning is fun.
`;


const storyEnglish = `
Hello world, learning is fun. 
Hello world, learning is fun. 
Hello world, learning is fun.
`;
*/

const storyFinnish = `
Eilen ennuste oli lämmin ja aurinko -inen. 
Tänään tiedä -mme että ennuste oli väärin. 
Sää on kylmä ja harmaa. 
Aurinko ei paista. 
Lämpötila on plus kaksi aste -tta. 
Ilma -tietee =n laitos ei kommentoi. 
Ihmiset näyttä -vät pettyne -i =ltä. 
Kaupunki on hiljainen ja kylmä. 
Me odotamme parem -paa huomis -ta.
`;

const storyFakeEnglish = `
Yesterday the_forecast was warm and sun -ny. 
Today know -we that the_forecast was wrong. 
The-weather is cold and gray. 
The-sun doesn't shine. 
The-temperature is plus two degree -s. 
Air -science -'s Institute not comments. 
The-people look -they disappointed -many -from. 
The-city is quiet and cold. 
We wait-we better -some tomorrow -some.
`;

const storyEnglish = `
Yesterday the forecast was warm and sunny. 
Today we know the forecast was wrong. 
The weather is cold and gray. 
The sun is not shining. 
The temperature is plus two degrees.
The Finnish Meteorological Institute gives no comment.
The people look disappointed.
The city is quiet and cold.
We are waiting for a better tomorrow.
`;


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
