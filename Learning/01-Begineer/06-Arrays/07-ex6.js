function getMax (array) {
    array.sort(
        function(a, b){
            return a-b;
        }
    );
    console.log(array);
    return array[array.length - 1];
}

const numbers = [1, 2, 100, 3, 4];
console.log(getMax(numbers));