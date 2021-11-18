let secretMessage = [
  "Learning",
  "is",
  "not",
  "about",
  "what",
  "you",
  "get",
  "easily",
  "the",
  "first",
  "time,",
  "it",
  "is",
  "about",
  "what",
  "you",
  "can",
  "figure",
  "out.",
  "-2015,",
  "Chris",
  "Pine,",
  "Learn",
  "JavaScript",
];

// Changing "Learning is not about what you get easily the first time, it is about what you can figure out. -2015, Chris Pine, Learn JavaScript" to
//          "Programming is not about what you know it is about what you can figure out. -2015, Chris Pine, Learn to Program".

const rewrite = () => {
  secretMessage.pop();
  secretMessage.push("to", "Program");
  secretMessage[7] = "right";
  secretMessage.shift();
  secretMessage.unshift("Programming");
  const pos = secretMessage.indexOf("get");
  const itemsToRemove = 5;
  secretMessage.splice(pos, itemsToRemove, "know");
  console.log(secretMessage.join(" "));
};

rewrite();
