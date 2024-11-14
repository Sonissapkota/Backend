const http = require("http");
const url = require("url");

const myServer = http.createServer((req, res)=>{
    if(req.url === "/favicon.ico") return res.end();
    const myUrl = url.parse(req.url, true)
    console.log(myUrl)
    switch(myUrl.pathname){
        case '/':
            res.end("Welcome to home page")
            break
        case '/about':
            res.end("This is the about section")
            break
        case '/search':
            const username = myUrl.query.user
            res.end(`Hello: ${username}`);
            break
        default:
            res.end("404");
    }
})

myServer.listen(8000,()=>{console.log("Server is started")})