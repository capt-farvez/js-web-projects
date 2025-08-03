let num0 = 0;  // 00000000
let num1 = 1;  // 00000001
let num2 = 2;  // 00000010

console.log(num0 & num1); 
console.log(num1 & num2)

console.log(num0 | num1);
console.log(num1 | num2);


const readPermission = 4;    // 00000100
const writePeremission = 2;  // 00000010
const executePermission = 1; // 00000001

let myPermission = 0;        // 00000000
myPermission = myPermission | writePeremission ; // 00000010

let message = (myPermission & readPermission) ? 'yes': 'no';    // (00000010 & 00000100) =  00000000  => no

console.log(message);