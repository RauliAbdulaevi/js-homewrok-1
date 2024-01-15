//Exercise 1
let num = 100;

if(num<50){
    console.log('ნაკლებია 50-ზე')
}
 else if (num>20){
    console.log('მეტია 20-ზე')
}
else{
    console.log('ERROR!!!')
}

//Exercise 1-2

num <50 ?  console.log('ნაკლებია 50-ზე') : num >20 ? console.log('მეტია 20-ზე') : console.log('ERROR!!!');

//Exercise 2

let name = 'მარიამ'
if( name == 'მარიამ'){
    console.log(true);
}
else{
    console.log(false);
}

//Exercise 3

switch(name){
    case 'მარიამ':
        console.log(true);
        break;
    default:
        console.log(false);
}

//Exercise 4

let age = 19;
console.log(typeof age);

//Exercise 5

let number = 10;
console.log(String(number));
