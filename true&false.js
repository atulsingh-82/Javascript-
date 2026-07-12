// sirf 8 value hi false hota hai 
//[ false, 0, -0, NaN, undefine,Null, "" eampty, 0n BigINT zero ]
 
// program for check true or false
if (""){
    console.log("true")}
else{
    console.log("false")
}

if ("0") console.log("A");
if (0) console.log("B");

/* Nullish Coalescing Operator (??) JavaScript ka bahut important operator hai.
Iska use default value dene ke liye hota hai, lekin sirf jab value null ya undefined ho.
Syntax
let result = value ?? defaultValue; */

let val;
//val = 5 ?? 10;
//val = undefined ?? 4;
val = null ?? 7;
console.log(val)

//++++++++  TERNIAR OPERATOR  +++++++++//
//condition ? true:false
// if else wala program ko ek line mai hi likh shakte hai

let teaPrice = 10
  teaPrice >=100 ?console.log("max price"):console.log("min price")

  let marks = 10
  marks >=80 ?console.log("1 div"):marks >=60 ?console.log("2 div"):
   marks >=33 ?console.log("3 div") : console.log("Fail")