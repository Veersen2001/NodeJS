const fs = require('fs') //it is used to It's an object that acts mainly as a function that takes a module name or path and returns the module.


// Async way to read file
 /*console.log("Read Start");
fs.readFile('input.txt',function(err,data){
    if(err){
        console.log('err=>',err);
        return err;
    }
    console.log('DATA:',data.toString())
    console.log("Read End");
    return data;

});  */   //input.txt is same dir so we can not take path


// Synchronous way to read file(step by step)

/*const data = fs.readFileSync('input.txt');
console.log("data:",data.toString());
console.log("END");
console.log("other stuff");*/

// open file
// r+: read the file 
// fd:file data
/*const buf = new Buffer(1024); //data storage
fs.open('input.txt','r+',function(err,fd){
    if(err){
        console.log('Error in opning file',err);
    }
    console.log('file open successfully');
    fs.read(fd,buf,buf.length,0,function(er,bytes){
        if(er){
        console.log('Error in reading file');
    }
    console.log('file data open successfully',bytes);
    console.log("data",buf.slice(0,bytes).toString());
    fs.close(fd,function(err){
        if(err){
            console.log("error in closing file")
        }
    })
    })
})*/

// writing to file or here over lapping 
/*fs.writeFile('input.txt','Pw Skills',function(err){
    if(err){
        console.log('Error in writing file');
    }
    else
    console.log('file writing successfully ',data);
});
*/
// append to file

/* fs.appendFile('input.txt','-----veersen','utf8',function(err){
    if(err)
    {
        console.log('error in appending file');
    }
    else{
        console.log("success in appending file");
    }
})  */
// go to the input.txt and check it 

// deleting file
fs.unlink('input.txt',function(err)
{
    if(err)
    {
        console.log('error in deleting file');
    }
    else{
        console.log("success in deleting file");
    }
})




