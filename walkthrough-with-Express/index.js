const http = require('http');

const PORT = 3058;
const HOSTNAME ="localhost";

const server = http.createServer((req,res)=>{
//   home page
if(req.url == '/')
{
    res.statusCode = 200;
    res.setHeader('Content-Type','text/plain');
    res.end('Node server created by veerbahadur sen!');
}
// aboutPage
else if(req.url == '/about')
{
   res.statusCode = 200;
    res.setHeader('Content-Type','text/plain');
    res.end('About page');
}
// contact page
else if(req.url =='/contact')
{
      res.statusCode = 200;
    res.setHeader('Content-Type','text/plain');
    res.end('contact page');
}
// product page and fetch data from another page
else if(req.url=='/product')
{
    const options = {
    hostname:'fakestoreapi.com', //server name
    path:'/products/1',
    method:'GET'
}
const apiReq = http.request(options,(apiRes)=>{
    apiRes.on('data',(data)=>{
      res.statusCode = 200;
    res.setHeader('Content-Type','application/json');
    res.end(data.toString());
    })
})  

apiReq.on("error",()=>{
    console.log(e);
});
apiReq.end();

}
else{
    res.statusCode = 404;
    res.setHeader('Content-Type','application/json');
    res.end(JSON.stringify({error:"Server Error"}));
}

});

server.listen(PORT,()=>{
    console.log(`Server is running at ${HOSTNAME}:${PORT}`);
});
