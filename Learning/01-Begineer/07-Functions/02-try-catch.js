const person = {
    firstName: 'Anowar',
    lastName: 'Hossen',
    get fullName(){
        return `${person.firstName} ${person.lastName}`;
    },
    set fullName(name){
        const parts = name.split(' ');
        this.firstName = parts[0];
        this.lastName = parts[1];
    }
};

person.fullName = 'hp Lenovo';
console.log(person.fullName);
console.log(person.firstName);
console.log(person.lastName);
console.log(person);