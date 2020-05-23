function capitalize(text){
    return text[0].toUpperCase() + text.substr(1);
}
var capitalized = capitalize('kittu');
console.log("Capitalized : ", capitalized);

function capitalizePromisified(name){
    const promise = new Promise((resolve, reject) => {  // 1
        if(typeof name !== 'string'){
            reject(new Error('Please provide a number'));  // 3
        }
        resolve(name[0].toUpperCase() + name.substr(1));   // 4
    });
    return promise;
}

capitalizePromisified('kittu').then((s1) => {     //2
   console.log("Success Promisfied Fun : ", s1);
}, (e1) => {
   console.log("Error   Promisfied Fun : ", e1);
})

capitalizePromisified(5).then((s1) => {
    console.log("Success Promisfied Fun : ", s1);
 }, (e1) => {
    console.log("Error   Promisfied Fun : ", e1);
 })
