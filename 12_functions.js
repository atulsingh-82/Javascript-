// function how to create functions
function myName(){
    console.log("A");
    console.log("T");
    console.log("U");
    console.log("L");
}
   myName()

// add two nummbers in functions
function addtwono(num1,num2){
    console.log(num1+num2);
}
addtwono(4,2)

function multiply(num1,num2){
    console.log(num1+num2);
}
multiply(7,8)

function myNameis(){
    return"AtulSingh"
 }
 const name = myNameis();
 console.log("My Name is",name)

 function maths(no1,no2){
    console.log(no1+no2);
}
  maths(3,6)

// user login in
function userlogin(username){
    return`${username} just log in`
}
console.log(userlogin("atul"))

// user login 
function youarelogin(username){
    
    return`${username} You Are Just Login`
}
console.log(youarelogin("hi"))

//Rest operator
function cardprice(...num){
   return num;
}
console.log(cardprice(100,200,300))

// object function mai pass krna
const user ={
    username:"atul",
    price:999
};
function handleobject(anyobject){
    console.log(`username is ${anyobject.username}`);
}
handleobject(user);

const number={
    no:8114025558
};
function mynumber(num){
    console.log(`my no is${num.no}`);
}
mynumber(number)

const about={
    name:"atul singh",
    add:"gorakhpur",
}
function aboutme(about){
    console.log(`about me${about.name}${about.add}`)
}
aboutme(about)

//array function mai pass krna
const arr= [10,20,30,40];
function getvalue(array){
    return array [2];
}
console.log(getvalue(arr));

//function expreession
const greet = function(){
    console.log("hello");
};
greet();

//Arrow Function
//Normal Function
function add(a,b){
 return a+b;
}
console.log(add(3,4));

//Arrow Function
let addone =(a,b)=>{
    return a+b;
}
console.log(addone(3,6));

//Arrow function short form
const addtwo = (b, c) => b + c;
console.log(addtwo(5, 7));


