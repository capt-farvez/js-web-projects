function primeCheck (num){
    for (let i=2; i<num; i++){
        if(num%i ==0){
            return false;
        }
    }
    return true;
}

function primeNumbers(limit){
    for (let i=2; i<=limit; i++){
        if(primeCheck(i)){
            console.log(i);
        }
    }
}

primeNumbers(20);