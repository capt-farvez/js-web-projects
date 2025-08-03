// for

for (let i=1; i<=10; i++){
    console.log(i);
}

//  While
let a  = 1;
while(a<5){
    console.log(a);
    a++;
}

//  do while 
a = 0;
do {
    console.log(a);
    a++;
} while(a<5);

// for in
const Person = {
    name: 'Anowar',
    age: 24
};

for(let key in Person){
    console.log(key)
}

const fruits = ['Mango', 'Orange', 'Apple'];

for(index in fruits){
    console.log(index, fruits[index]);
}
for(let index in fruits){
    console.log(index, fruits[index]);
}