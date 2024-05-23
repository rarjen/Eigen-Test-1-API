//Number 2 (Longest sentence)

const sentence = "Saya sangat senang mengerjakan soal algoritma";
const words = sentence.split(" ");
let longestSentence = "";

for (let i = 0; i < words.length; i++) {
  if (words[i].length > longestSentence.length) {
    longestSentence = words[i];
  }
}

console.log(`${longestSentence}: ${longestSentence.length} character`); // Output: "mengerjakan"
