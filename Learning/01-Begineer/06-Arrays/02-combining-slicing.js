const first = [1, 2, 3];
const second = [4, 5, 6];

const combined = first.concat (second);

const slice = combined.slice();

console.log (combined);
console.log (slice);

// Join
const numbers = [1, 2, 3];
const joined = numbers.join('');
console.log(joined);
console.log(typeof(joined));

//  Split
const sentence = 'This is the sentence';
const words = sentence.split(' ');
console.log('Words are: ' + words);