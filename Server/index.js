const http = require("http");
const fs = require("fs");

const MyServer = http.createServer((req,res)=>{
    const log= `${Date.now()}: new req`;
fs.appendFile("log.txt",log,(err,data)=>{
    
    res.end("Hello form server")
})
   
});

MyServer.listen(8000,()=>console.log("Server Started!"));


