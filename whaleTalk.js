const whaleTalk = (input) => {
  const vowels = ["a", "e", "o", "u", "i"];
  const resultArray = [];

  for (let i = 0; i < input.length; i++) {
    for (let j = 0; j < vowels.length; j++) {
      if (input[i] == vowels[j]) {
        resultArray.push(vowels[j]);
      }
    }
    if (input[i] == "e") {
      resultArray.push(input[i]);
    }
    if (input[i] == "u") {
      resultArray.push(input[i]);
    }
  }
  console.log(resultArray.join("").toUpperCase());
};
whaleTalk("turpentine and turtles");
