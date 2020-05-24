
function askFirstDealer(){
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(8000), 3000);
    });
}

function askSecondDealer(){
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(12000), 5000);
    });
}

function askThirdDealer(){
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(10000), 8000);
    });
}

function askForthDealer(){
    return new Promise((resolve, reject) => {
        setTimeout(() => reject('No Responce from Fourth Dealer'), 5000);
    });
}


Promise.all([askFirstDealer(), askSecondDealer(), askThirdDealer()])
.then(prices => {
    console.log("Array of Promises1 - All Success calls : ", prices);
});


Promise.all([askFirstDealer(), askSecondDealer(), askThirdDealer(), askForthDealer()])
.then(prices => {
    console.log("Array of Promises2 - With one failed call (Success): ", prices);
})
.catch(error => {                                                                 // But using this method, the functionality will end at the point of 1st Failure(reject) - Solution: We have to add the catch for each async call in the array.
    console.log("Array of Promises2 - With one failed call (Failure): ", error);   
})


// Adding .catch for each async call in an array. 
Promise.all([askFirstDealer().catch(error  => {return error}), 
             askSecondDealer().catch(error => {return error}), 
             askThirdDealer().catch(error  => {return error}), 
             askForthDealer().catch(error  => {return error}),
            ])
.then(prices => {
    console.log("Array of Promises3 - With one failed call &  (Success): ", prices);
})
.catch(error => {                                                                 
    console.log("Array of Promises3 - With one failed call (Failure): ", error);   
})


