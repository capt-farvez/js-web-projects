function arrayFromRange(min, max){
    let numbers=[];
    for (let i=min; i<=max; i++){
        numbers.push(i);
    }
    return numbers;
}

const numbers = arrayFromRange (-10, 5);
console.log(numbers);