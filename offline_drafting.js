
console.log("Testing comma operator: ", (5,10))


let words = ["hello", "world", "this", "is", "a", "test"]

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(x => x * 2)

console.log("Did multiplying by 2 work?: ", numbers);

const testfunction = (whatever) =>
  whatever.map((element, idx) => {
    return (
      element,idx
    )
  })

/*
const testfunction = (words) =>2
  words.map((word, idx) => {
    return (
      <span key={idx}>{word}</span>
    )
  })
*/

console.log(testfunction(words));

/*
const renderWords = (words, className, isFinnish = false) =>
    words.map((word, idx) => {
      let isHighlighted = false;
      if (isFinnish && hoveredWordIndex === idx) {
        isHighlighted = true;
      }
      console.log("FinnishEndingsIndex[lineIndex]: " + FinnishEndingsIndex[lineIndex]);
  
     
        return (
          <>
            <span
              key={idx}
              className={`story-word ${className} ${isHighlighted ? 'highlight' : ''} ${
                FinnishEndingsIndex[lineIndex]?.includes(idx) ? 'story-word-ending' : ''
              }`}
              onTouchStart={() => isFinnish && setHoveredWordIndex(idx)}
              onMouseEnter={() => {
                if (isFinnish) {
                  setHoveredWordIndex(idx);
                }
              }}
              onMouseLeave={() => isFinnish && setHoveredWordIndex(null)}
            >
              {word}
            </span>
            //Add space after word if it's not the last word in the line and not an ending 
           {idx !== finnishLines[lineIndex].length - 1 && !FinnishEndingsIndex[lineIndex]?.includes(idx+1) && (
              <span key={`${idx}-space`} className="story-word">&nbsp;</span>
            )}
          </>
        );
      });

      */