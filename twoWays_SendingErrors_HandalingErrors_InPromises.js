function calculateSquare(value){   // 2
    const promise = new Promise((resolve , reject) => {  // 3
       
     if(typeof value !== 'number'){   
         reject(new Error(' Please Input an Integer ')); // 4  //** Returning an Error: By 'reject'
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
    throw new Error('Something went wrong');  //** Triggaring an Error: By 'throw new Error'
})
.then(undefined, reason => {                  //* Handaling Errors: By '.then'
    console.log("Error Happend: ", reason);
});

calculateSquare(3)
.then(value => {
    console.log(value);
    return calculateSquare(4);
})
.then(value => {
    console.log(value);
    return new Promise((resolve, reject) => {
        return reject(new Error('Something went wrong')); //** Triggaring an Error: By 'reject' 
    });
})
.catch( reason => {                           //* Handaling Errors: By '.catch'
    console.log("Error Happend: ", reason);
})


