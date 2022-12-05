// first exercise 

function sumOfMoney (a, b, c) {
    if(a+ b+ c > 2000){
        console.log('return the money')
    } else {
        console.log('enjoy having money')
    }
}
sumOfMoney(1500 ,100 ,200 ) 


// scond exercise 

let fileName = 'night.png';
let index = fileName.indexOf('.');
let fileType = fileName.slice(index);
console.log(fileType);


// thired exercise 




// fourth exercise 


let name = 'mohammad';
let isIncludeMr = name.includes('Mr')
if (isIncludeMr){
    console.log('hi ' + name);
} else {
    console.log('hi Mr ' + name);
}


// fifth exercise 

let Name= 'zaripouyan';
let first3letter = Name.slice(0,3);
let last3letter = Name.slice(Name.length-3);
let concatenation = first3letter + last3letter
console.log(concatenation);



// sixth exercise 

let word ='mohammad' ;
if (word.length%2===0){
    console.log(word.slice(word.length/2));
}


// seventh exercise 

let firstname='nnima';
let secondname= 'mina';
let newName = firstname.slice(1) + secondname.slice(1) ;
console.log(newName);

// eighth exercise

let num1 = 105;
let num2= 85;
if (Math.abs(100-num1) > Math.abs(100-num2)){
    console.log(num2 + ' closer to 100 ');
} else{
    console.log(num1 + ' closer to 100 ');
}


// ninth exercise 

let numbers =[ 27, 30, 88, 98, 1401]
let even= numbers.filter(function(number){
    return number%2==0
})
console.log(even);



// tenth exercise 
// let Word ;
// let letter ;
// let separateLetter = Word.split('');

// **************************************************************************************************

// bolori's test!

// first exercise

let firstNum= 5;
let secondNum= 6;
let selectOperation = prompt('select the type of operation \n 1. + \n 2. - \n 3. * \n 4. /')
if (selectOperation==1){
    console.log (firstNum + secondNum); 
} else if (selectOperation==2){
    console.log (firstNum - secondNum); 

} else if (selectOperation==3){
    console.log (firstNum * secondNum); 

} else if (selectOperation==4){
    console.log (firstNum / secondNum); 

} else {
    console.log('select the number of operator');
}

// second exercise

let i = 1
function timer (){
let timer = setInterval(function(){
    if (i===10){
        clearInterval(timer)
    }
    console.log(i);
    i++
}, 1000)
}
setTimeout(timer,3000);

// thired exercise 
 let UserName = prompt('what is your name? ')
 let users = [
{id:1, name:'nika', role:'admin'},
{id:2, name:'bahar', role:'user'},
{id:3, name:'roza', role:'user'},
{id:4, name:'gandom', role:'user'},
{id:5, name:'aysa', role:'user'},
 ]
  
 let isAdmin = users.some(function(user){
    return user.role == 'admin' && user.name === UserName
 })

 if (isAdmin){
    console.log('welcome');
 } else {
    console.log('unallowable');
 }
    











