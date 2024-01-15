const http = require('http');


const server = http.createServer((req, res) => {
    if (req.url === "/about") {
        res.end("about page")
        return
    }
    if (req.url === "/") {
        res.end("home page")
        return
    }
    res.end(`<h1> not found </h1>`)
})

server.listen(5000)