coconut_story.js

/*
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

*/


/*

const storyFinnish = `
  Ruka wa kuukou ni iru.
  Ruka wa tsukare -te iru.
  Ruka wa koohii o nomu.
  Koohii wa takai.
  Koohii wa chotto hen da.
  Demo koohii wa yaku ni tatsu.
  Finrando -jin wa kore o mainichi nomu?
  Ruka wa basu o sagashite iru.
  Basu ga kuru.
  Untenshu wa eigo o hanasanai.
  Untenshu wa nanimo iwanai.
  Ruka wa "Yaa" to iu.
  Untenshu wa nanimo iwanai.
  Soto de wa yuki ga futte iru.
  Yuki ga takusan.
  Samui.
  Totemo samui.
  Yuki wa kirei da.
  Ruka wa hohoemu.
  Koko wa Finrando da.`;

  const storyFakeEnglish = `
  Luca asforhim airport at be.
  Luca asforhim tired -(teform) be.
  Luca asforhim coffee (<object) drink.
  Coffee asforit expensive.
  Coffee asforit a_bit strange be.
  But coffee asforit function for stands.
  Finn -s asforthem this (some) everyday drink?
  Luca asforhim bus (some) searches is.
  Bus (it_subject) arrives.
  Driver (it_subject) English (object) notspeak.
  Driver asforhim nothing doesntsay.
  Luca asforhim "Hi." (quote) say.
  Driver asforhim nothing doesntsay.
  Outside at asforthere snow (it_subject) itfalling is
  Snow (it_subject) lots.
  Cold.
  Really cold.
  Snow asforit beautiful be.
  Luca asforhim smile.
  This asforit Finland be.
`;

  const storyEnglish = `
  Luca is at the airport.   
  Luca is tired.   
  Luca drinks coffee.   
  The coffee is expensive.   
  The coffee is a bit strange.   
  But the coffee helps.   
  Finns drink this every day?   
  Luca is looking for the bus.   
  The bus arrives.   
  The driver doesn't speak English.   
  The driver doesn't say anything.   
  Luca says: "Hi."   
  The driver doesn't say anything.   
  It's snowing outside.   
  A lot of snow.   
  It's cold.   
  Really cold.   
  The snow is beautiful.   
  Luca smiles.   
  This is Finland.`;
  
  const storySpokenFinnish = `
  るか-は-くうこう-に-いる。   
  るか-は-つかれて-いる。   
  るか-は-こおひい-を-のむ。   
  こおひいはたかい。   
  こおひいはちょっとへんだ。   
  でもこおひいはやくにたつ。   
  ふぃんらんどじんはこれをまいにちのむ？   
  るかはばすをさがしている。   
  ばすがくる。   
  うんてんしゅはえいごをはなさない。   
  うんてんしゅはなにもいわない。   
  るかは「やあ」という。   
  うんてんしゅはなにもいわない。   
  そとではゆきがふっている。   
  ゆきがたくさん。   
  さむい。   
  とてもさむい。   
  ゆきはきれいだ。   
  るかはほほえむ。   
  ここはふぃんらんどだ。`;

*/



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
