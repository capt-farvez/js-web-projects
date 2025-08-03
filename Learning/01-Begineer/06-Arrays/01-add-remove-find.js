const arr = [1, 2, 3];
// add to end
arr.push(4, 5, 6);

// add to first
arr.unshift (0);

//  add to middle 
arr.splice(2, 0, 'a', 'b' );

console.log(arr);


//  Find from Arry (primitive)

console.log(arr.indexOf(1, 2));
console.log(arr.lastIndexOf(1));

console.log(arr.indexOf(1) != -1);
console.log(arr.includes(1));

//  find reference type
let numbers = [1, 2, 3, 4, 5];

// numbers= [];

// numbers.length =0;

while (numbers.length > 0){
    numbers.pop();
}

console.log(numbers);