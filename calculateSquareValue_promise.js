// Declaring calculateSquare function
function calculateSquare(number) {
                                 // Executor Function
    const promise = new Promise(function (resolve, reject) {
        // Async Action 
        setTimeout(function () {
            if (typeof number !== 'number') {
                return reject(new Error('Argument of type number is expected'));
            }
            const result = number * number;
            resolve(result);
        }, 1000);

    });

    return promise;
}

// Example of invoking calculateSquare function with correct arguments
calculateSquare(2)   // Since calculateSquare - Function returning a promise we can call then-method on it.
  .then(value => {  
        console.log('Success: ' + value);
    }, error => {
        console.log('Error: ' + error);
    });

// Example of invoking calculateSquare function with incorrect arguments
calculateSquare('string')
  .then(value => {
        console.log('Success: ' + value);
    }, error => {
        console.log('Error: ' + error);
    });
