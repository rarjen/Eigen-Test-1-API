//Number 3 Menentukan berapa kali kata dalam Query terdapat pada array Input
const INPUT = ["xc", "dz", "bbb", "dz"];
const QUERY = ["bbb", "ac", "dz"];

function countOccurrences(inputArray, queryArray) {
  const result = [];

  queryArray.forEach((query) => {
    let count = 0;
    inputArray.forEach((input) => {
      if (input === query) {
        count++;
      }
    });
    result.push(count);
  });

  return result;
}

const OUTPUT = countOccurrences(INPUT, QUERY);
console.log(OUTPUT);
