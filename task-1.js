/* 
    Task-1: 
    Count how many times a string has the letter `a` 
*/
const srt = "A passionate Programmer from Bangladesh";
let count = 0;
for (let letter of srt) {
  if (letter.toLowerCase() === "a") {
    count++;
  }
}
console.log(count);
