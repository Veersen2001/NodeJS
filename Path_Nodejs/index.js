const { log } = require("console");
const path = require("path");
console.log(path.sep); //window(\)

console.log(process.env.path);//environment path
console.log(path.delimiter);//window(;)/mac or linux(:)
const filePath1 = '/public_html/home/index.html';

// locate to the current file path
const currentFilePath = __filename;
console.log(currentFilePath);
// output:e:\NodeJS\Path_Nodejs\index.js

// current dir
console.log(__dirname);
// output:e:\NodeJS\Path_Nodejs

// if we want to name of the file
let basename = path.basename(currentFilePath);
console.log('filename with extension::',basename);

// if we want to print the file name without extension
let baseNameWithoutExt = path.basename(currentFilePath,'.js');
console.log(baseNameWithoutExt);
// output:index

// dir name
let dirname = path.dirname(currentFilePath);
console.log('dirName',dirname);

// find extension in file
console.log("extension:",path.extname(currentFilePath));
// output: .js

// if we have two extentions in a file 

console.log("extension2:",path.extname('index.md.js'));
// output:.js


// combine base(fileName) and directory
let PathToFile = path.format({
    dir:'\public_html\home',
    base:'index.html'
});
console.log("path to file>",PathToFile);
// output:path to file> /public_html/home\index.html

// Absolute Path => starting in root like c:\,d:\ example:e:\NodeJS\Path_Nodejs\
// Relative Path => if path does not start in root .

// check wheather path is absolute or relative 
console.log("IsAbsolute",path.isAbsolute(currentFilePath)); //true
console.log("isAbsolute",path.isAbsolute('\index.js')); //false

// make file path and join path
let PathToDir = path.join('\home','js','dist','index.js');
console.log('pathToDir>',PathToDir);

// parse(break) the path
console.log("parse the path",path.parse(currentFilePath));

// realtive path find (how reach the directory)

console.log('Relative Path>',path.relative('/home/user/config','/home/user/js'));

// same as __filename(current file path)
console.log(' path>:',path.resolve());

// if any path to make normalize form then used normalize() function
console.log('Normalize path',path.normalize('\\home//user//js\\dfjf'));
// output:\home\user\js\dfjf