// make first server

const http = require('http');

const server=http.createServer((req,res)=>{
 if(req.url=='/')//(/):root (first page)
 {
    res.write("<h1>hello,Node.js!<h2>");
 }
 if(req.url == '/about')
 {
    res.write('<h1>thie is about page</h1>');
 }
 res.end();
});

server.listen(5000) //port

console.log('the http server is running in port 5000');