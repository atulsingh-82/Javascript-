// for loop

/*for (let i = 0; i <=10; i++) {
    const element = i;
    console.log(element)
    
}
for (let i = 1; i <= 10; i++) {
    const table = 2 * i;
    console.log(`2 x ${i} = ${table}`);
}
for (let i=1;i<=10; i++){
    const table = 3*i;
    console.log(`3x ${i}= ${table}`);
} */

 /*   // Write a Table of 2 to 10
    for (let i = 1; i <= 5; i++) {
        const element = i;

        for (let j = 1; j <= 10; j++) {
            const element1 = j;
            console.log(`${i} x ${j} =${i*j}`);
            
        }
        
        console.log(element);
    }
 // type 50 times
    for (let i = 1; i <= 50; i++) {
        const element = i;
        console.log(`hi ${element}`)
        
    }
    
    // use Array in loop

let myArray =["flash","batman","superman"];
for (let i = 0; i < myArray.length; i++) {
    const element = myArray[i];
    console.log(element);
}
*/    


// //++++++++++++  Find a spacefic no   ++++++++++++++

// // if statement kissi specfic part ko find krne ke ley hota hai
// for (let i = 0; i <= 10; i++) {
//     const element = i;
//     if (i == 5) {
//         console.log(`it is specfic no ${element}`);
//     }
//     console.log(element)
// }



// +++++++++ break ++++++++++++++++++

// break statement kissi part ke baad break lagane ke ley hota h.
// uske baad code run nhi hota h.
for (let i = 0; i <= 10; i++) {
    const element = i;
    if (i == 5) {
        console.log(`We find the num: ${element}`);
        break
    }
    console.log(element)
}



// ++++++++ continue +++++++++++

// // continue tub use krte h jub break ko ignor kr ke aage badhna hota h
// for(let i = 0; i <= 10; i++){
//     const element = i;
//     if(i == 5){
//         console.log(`Num is find: ${element}`);
//         continue
//     }
//     console.log(element);
// }

// ++++++++++++ sum of 1 to n  num
let n = 34;
let sum = 0;
for (let i = 1; i <= n; i++) {
    sum = sum + i;
}
console.log(`sum of 1 to ${n} = ${sum}`);