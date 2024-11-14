const http = require("http");
const fp = require("fs")

const myServer = http.createServer((req,res)=>{
    const log = `${Date.now()}: ${req.url} New Request received!\n`
    fp.appendFile("log.txt", log, (err, data)=>{
        switch (req.url){
            case '/': res.end("Homepage")
            break
            case '/about': res.end("This is sonis website")
            break
            default: res.end('404')
        }
    })
});

myServer.listen(8000, ()=> console.log("Server started"));