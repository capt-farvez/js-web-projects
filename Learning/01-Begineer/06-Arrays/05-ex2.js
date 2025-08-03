function includes (array, searchElement){
    let arrLen = array.length;
    for (let i=0; i<arrLen; i++){
        if(array[i] === searchElement){
            return true;
        }
    }
    return false;
}

const numbers = [1, 2, 3 , 4, 5];
const result = includes(numbers, 1);
console.log(result);