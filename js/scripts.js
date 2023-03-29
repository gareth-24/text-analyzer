// Utility Logic

function isEmpty() {
  for (let i=0; i < arguments.length; i++) {
    if (arguments[i].trim().length === 0) {
      return true;
    }
  }
  return false;
}

// Business Logic

function firstInstanceOfWord(word, text) {
  const textArray = text.split(" ");
  for (let i = 0; i < textArray.length; i++) {
    console.log(i);
    if (word === textArray[i]) {
      return i;
    }
  }
  return -1;
}

function wordCounter(text) {
  if (isEmpty(text)) {
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
  if (isEmpty(word)) {
    return 0;
  }
  const textArray = text.split(" ");
  let wordCount = 0;
  textArray.forEach(function(element) {
    if (element.toLowerCase().includes(word.toLowerCase())) {
      wordCount++;
    }
  });
  return wordCount;
}



//Incomplete function below
function mostCommonWords(text)  {
  if (isEmpty(text)) {
    return 0;
  }
  let wordCountArray = [];
  const textArray = text.split(" ");
  let word1Count = 0
  textArray.forEach(function(element, index)  {
    let word1Count = element;
    let word1 = element.toString();
    let word1ccurances = numberOfOccurrencesInText(word1, text);
    wordCountArray.push(wordCount);
    console.log(wordCountArray);
  });
}
//Incomplete function above^



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

function boldPassage(word, text) {
  if (isEmpty(word, text)) {
    return null;
  }
  const p = document.createElement("p");
  let textArray = text.split(" ");
  textArray.forEach(function(element, index) {
    if (word === element) {
      const bold = document.createElement("strong");
      bold.append(element);
      p.append(bold);
    } else {
      p.append(element);
    }
    if (index !== (textArray.length - 1)) {
      p.append(" ");
    }
  });
  return p;
}

function handleFormSubmission() {
  event.preventDefault();
  const passage = document.getElementById("text-passage").value;
  const word = document.getElementById("word").value;
  const wordCount = wordCounter(passage);
  const occurrencesOfWord = numberOfOccurrencesInText(word, passage);
  document.getElementById("total-count").innerText = wordCount;
  document.getElementById("selected-count").innerText = occurrencesOfWord;
  let boldedPassage = boldPassage(word, passage);
  if (boldedPassage) {
    document.querySelector("div#bolded-passage").append(boldedPassage);
  } else {
    document.querySelector("div#bolded-passage").innerText = null;
  }
}

window.addEventListener("load", function() {
  document.querySelector("form#word-counter").addEventListener("submit", handleFormSubmission);
});

