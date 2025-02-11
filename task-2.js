/* 
    Task-2:

    Count how many times a string has the letter `a` or `A` 
*/

const str = "A passionate Programmer from Bangladesh";

let count = 0;

for (let letter of str) {
  if (letter === "A" || letter === "a") {
    count++;
  }
}
console.log(count);
