const fs = require('fs') //it is used to It's an object that acts mainly as a function that takes a module name or path and returns the module.


// Async way to read file
 console.log("Read Start");
// fs.readFile('input.txt',function(err,data){
//     if(err){
//         console.log('err=>',err);
//         return err;
//     }
//     console.log('DATA:',data.toString())
//     console.log("Read End");
//     return data;

// });  //input.txt is same dir so we can not take path


// Synchronous way to read file(step by step)
const data = fs.readFileSync('input.txt');
console.log("data:",data.toString());
console.log("END");
console.log("other stuff");

