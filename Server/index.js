const http = require("http");
const fs = require("fs");

const MyServer = http.createServer((req, res) => {
    const log = `${Date.now()}: ${req.url} new req\n`; 
    fs.appendFile("log.txt", log, (err) => {
        if (err) {
            console.error("Error writing to log file:", err);
            res.statusCode = 500;
            res.end("Internal Server Error");
        } else {
            res.end("Hello from server");
        }
    });
});

MyServer.listen(8000, () => console.log("Server Started!"));
