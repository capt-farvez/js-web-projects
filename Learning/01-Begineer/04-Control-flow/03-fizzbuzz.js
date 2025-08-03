function fizzbuzz (num){
    if ((num%3==0) && (num%3==0)) {
        console.log('Fizzbuzz');
    }
    else if((typeof num) !== 'number'){
        console.log("Not a number");
    }
    else if (num%3 ==0) {
        console.log("Fizz");
    }
    else if (num%5 ==0) {
        console.log("Buzz");
    }
    else{
        console.log('None of these');
    }
}

fizzbuzz(15);