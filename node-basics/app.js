const { readFileSync, createReadStream } = require('fs');
const http = require('http')

// const server = http.createServer()

// server.on('request', (req, res) => {
//     if (req.url === "/") {
//         res.end("home page")
//         return;
//     }
//     if (req.url === "/about") {
//         res.end("about page")
//         return;
//     }
//     res.end("not found")
// })


//test why we use readtstream


const server = http.createServer((req,res) => {
    // const text = readFileSync('./Basics/content-folder/subfolder/bigfile.txt');
    // res.end(text)

    const filestream = createReadStream('./Basics/content-folder/subfolder/bigfile.txt', {highWaterMark: 9000, encoding: 'utf-8'})

    filestream.on('open', () => {
        filestream.pipe(res)
    })

    filestream.on('error', (err) => {
        res.end(err)
    })
})


server.listen(5000, () => {
    console.log("server is listening")
})