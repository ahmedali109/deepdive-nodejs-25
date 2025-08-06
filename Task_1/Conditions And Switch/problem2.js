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

function getLetter(s) {
  let letter;
  let first = s[0];
  switch (true) {
    case "aeiou".includes(first):
      letter = "A";
      break;
    case "bcdfg".includes(first):
      letter = "B";
      break;
    case "hjklm".includes(first):
      letter = "C";
      break;
    case "npqrstvwxyz".includes(first):
      letter = "D";
      break;
  }

  return letter;
}

function main() {
  const s = readLine();

  console.log(getLetter(s));
}
