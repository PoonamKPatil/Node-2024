// const {writeFileSync} = require('fs')

// for (let index = 0; index < 10000; index++) {
//     writeFileSync('./content-folder/subfolder/bigfile.txt', 'Hello worlds \n', {flag: 'a'});
// }

//default 64kb
const {createReadStream, readFileSync}= require('fs')
const stream = createReadStream('./content-folder/subfolder/bigfile.txt', {highWaterMark : 90000, encoding: 'utf-8'})

stream.on('data', (result) => {
    console.log(result)
})

stream.on('error', (err) => {
    console.log(err)
})
