//  If else

let hour = 22;

if(hour>=6 && hour<12){
    console.log('Good Morning');
}
else if (hour >=12 && hour <18){
    console.log('Good Afternoon');
}
else{
    console.log('Good evening');
}

//Swith case
let role; 

switch (role) {
    case 'admin' :
        console.log('Admin');
    case 'moderator' :
        console.log('Moderator');
    default: 
        console.log('Unknown');
}