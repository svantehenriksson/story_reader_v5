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
Eilen ennuste oli lämmin ja aurinkoinen. 
Tänään tiedämme että ennuste oli väärin. 
Sää on kylmä ja harmaa. 
Aurinko ei paista. 
Lämpötila on plus kaksi astetta. 
Ilmatieteen laitos ei kommentoi. 
Ihmiset näyttävät pettyneiltä. 
Kaupunki on hiljainen ja kylmä. 
Me odotamme parempaa huomista.
`;

const storyFakeEnglish = `
Yesterday the_forecast was warm and sunny. 
Today know-we that the_forecast was wrong. 
The-weather is cold and gray. 
The-sun not shines. 
The-temperature is plus two degrees. 
Air-science's Institute not comments. 
The-people look-they disappointed-from. 
The-city is quiet and cold. 
We wait-we better_some tomorrow-from.
`;

const storyEnglish = `
Yesterday the forecast was warm and sunny. 
Today we know the forecast was wrong. 
The weather is cold and gray. 
The sun is not shining. 
The temperature is plus two degrees.
The Finnish Meteorological Institute gives no comment.
The neighbors look disappointed.
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
