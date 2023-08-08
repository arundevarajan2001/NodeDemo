const http = require('http')
const fs = require('fs')

const server = http.createServer((req,res)=>{
    console.log(req.url)
    if (req.url == "/test"){
        data = fs.readFileSync("Source/page.html")
        res.writeHead(200,{"Content-Type":"text/html"})
        res.write(data)
        res.end()
    }
    
}).listen(3000)