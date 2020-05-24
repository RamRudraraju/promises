var askJohn = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve('John   : I got the Pen'), 3000);
    });
}

var askEugene = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve('Eugene : I got the Pen'), 5000);
    });
}

var askSusy = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve('Susy   : I got the Pen'), 2000);
    });
}

Promise.race([askJohn(), askEugene(), askSusy()])
.then(value => {
     console.log("Race 1: ", value);
});

var askSam = () => {
     return new Promise((resolve, reject) => {
        setTimeout(() => reject('Sam    : Soory, No extra pen'), 1000);
    });
}

Promise.race([askJohn(), askEugene(), askSusy(), askSam()])
.then(value => {
     console.log("Race 2: ",value);
}).catch(value => {
     console.log("Race 2: ",value);
})