const http = require('http');

// http request:http. request to send the data to the server and await the response. The response is stored in the req variable, and upon error, it is logged into the console

const options = {
    hostname:'fakestoreapi.com', //server name
    path:'/products/1',
    method:'GET'
}
const apiReq = http.request(options,(apiRes)=>{
    apiRes.on('data',(data)=>{
        console.log(data.toString());
    })
})  

apiReq.on("error",()=>{
    console.log(e);
});

apiReq.end();