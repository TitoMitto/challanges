function findMissingLetter(array) {
    let isUpperCase = /[A-Z]/g.test(array.join(''))
    array = array.join('').toLowerCase().split('')
    let alphabet = "abcdefghijklmnopqrstuvwxyz";
    let letter = alphabet
    .slice(alphabet.indexOf(array[0]), alphabet.indexOf(array[array.length -1]))
    .split('')
    .filter((item)=> !array.includes(item))[0]
  return isUpperCase? letter.toUpperCase(): letter;
}

console.log(findMissingLetter(['a','b','d']))