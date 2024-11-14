const http = require("http");
const url = require("url");

const myServer = http.createServer((req, res)=>{
    if(req.url === "./faviconico") return res.end;
    const myUrl = url.parse(req.url, true)
    switch(myUrl.pathname){
        case '/':
            res.end("Welcome to home page")
        break
        case '/about':
            res.end("This is the about section")
        break
        case '/search':
            
            res.end("This is the search section")
        break
        default:
            res.end("404")
    }
})

myServer.listen(8000,()=>{console.log("Server is started")})