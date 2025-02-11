/* 
    Task-3:

    Check whether a string contains all the vowels `a`, `e`, `i`, `o`, `u`
*/

const str = "A passionate Programmer from Bangladesh";
const vowels = "aeiou";
let foundVowels = [];

for (let letter of str) {
  if (vowels.includes(letter.toLowerCase())) {
    foundVowels.push(letter.toLowerCase());
  }
}
const unique = [...new Set(foundVowels)];
const containsAllVowels = vowels
  .split("")
  .every((vowel) => unique.includes(vowel));
console.log(containsAllVowels);
