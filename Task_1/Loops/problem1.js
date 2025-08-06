"use strict";

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;

process.stdin.on("data", (inputStdin) => {
  inputString += inputStdin;
});

process.stdin.on("end", (_) => {
  inputString = inputString
    .trim()
    .split("\n")
    .map((string) => {
      return string.trim();
    });

  main();
});

function readLine() {
  return inputString[currentLine++];
}

/*
 * Complete the vowelsAndConsonants function.
 * Print your output using 'console.log()'.
 */
function vowelsAndConsonants(s) {
  const vowels = "aeiou";
  let x = "";

  for (let word of s) {
    vowels.includes(word) ? console.log(word) : (x += word);
  }

  for (let word of x) {
    console.log(word);
  }
}

function main() {
  const s = readLine();

  vowelsAndConsonants(s);
}
