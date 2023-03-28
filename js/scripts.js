// Business Logic

function wordCounter(text) {
  if (text.trim().length === 0) {
    return 0;
  }
  let wordCount = 0;
  const textArray = text.split(" ");
  textArray.forEach(function(element) {
    if (!Number(element)) {
      wordCount++;
    }
  });
  return wordCount;
}

function numberOfOccurrencesInText(word, text) {
  const textArray = text.split(" ");
  let wordCount = 0;
  textArray.forEach(function(element) {
    if (element.toLowerCase().includes(word.toLowerCase())) {
      wordCount++;
    }
  });
  return wordCount;
}

function omitOffensiveWords(text) {
  let textArray = text.split(" ");
  let badWords = ['zoinks', 'muppeteer', 'biffaroni', 'loopdaloop'];
  let badString = badWords.toString();
  let returnArray = [];
  
  textArray.forEach(element => {
    if (badString.includes(element.toLowerCase()))  {
      returnArray.push("____");
    } else  {
      returnArray.push(element);
    }
  });
  return returnArray.toString(' ').replaceAll(',', ' ');
}

// function omitZoinks(text) {
//   let newText = text.replace("zoinks", "___");
//   return newText;
// }

// User Interface Logic

