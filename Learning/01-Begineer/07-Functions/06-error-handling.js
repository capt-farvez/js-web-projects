function countOccurances (array, searchElement){
    if(!Array.isArray(array)){
        throw new Error('Invalid array');
    }
    return array.reduce((accumulator, current) =>{
        const occurance =  (current === searchElement)? 1:0;
        return accumulator + occurance;
    }, 0);
}


try{
    const numbers = [1, 2, 3, 4, 5, 1, 1];
    
    const count = countOccurances (numbers, 1);
    console.log(count);
}
catch (e){
    console.log(e.message);
}