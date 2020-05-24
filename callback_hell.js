
function calculateSquare(value){   // 2
   const promise = new Promise((resolve , reject) => {  // 3
      
    if(typeof value !== 'number'){   
        reject(new Error(' Please Input an Integer ')); // 4
    }
    let sqValue = (value * value);
    resolve(sqValue);                                  // 5
   });

   return promise;                                     // 6
}

// Avoiding Callback hell.
calculateSquare(1)  // 1 
.then(value => {
    console.log(value);
    return calculateSquare(2);
})
.then(value => {
    console.log(value);
    return calculateSquare(3);
})
.then(value => {
    console.log(value);
    return calculateSquare(4);
})
.then(value => {
    console.log(value);
    return calculateSquare(5);
})
.then(value => {
    console.log(value);
    return calculateSquare(6);
})
.then(value => {
    console.log(value);
    return calculateSquare(7);
})
.then(value => {
    console.log(value);
    return calculateSquare(8);
})
.then(value => {
    console.log(value);
    return calculateSquare(9);
})
.then(value => {
    console.log(value);
    return calculateSquare(10);
})
