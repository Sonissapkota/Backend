const http = require("http")
const url = require("url")

const myServer = http.createServer((req,res)=>{
    if(req.url === '/favicon.ico') return res.end();
    const myUrl = url.parse(req.url, true)
    console.log(req.url)
    switch(myUrl.pathname){
        case '/': res.end("This is the homepage welcome!")
        break
        case '/about': res.end("This is the about us section")
        break
        case '/search':
            const username = myUrl.query.user
            res.end(`Hello: ${username}`)
            break
        default: res.end("Error 404 / Couldn't find requested resources")
    }
})

myServer.listen(8000, console.log("Server is connected"))