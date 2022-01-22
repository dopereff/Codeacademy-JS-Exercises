const chunk = (arr, size = 1) => {
  let arrayChunks = [];
  for (let i = 0; i < arr.length; i += size) {
    let arrayChunk = array.slice(i, i + size);
    arrayChunks.push(arrayChunk);
  }
  return arrayChunks;
};

const array = ["1", "2", "3", "4", "5"];

console.log(chunk(array, 2));
