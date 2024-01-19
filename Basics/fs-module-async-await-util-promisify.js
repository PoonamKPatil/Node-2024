const {readFile, writeFile} = require('fs').promises
const util = require('util')
const readFilePromise = util.promisify(readFile, 'utf-8')
const writeFilePromise = util.promisify(writeFile)

const start = async () => {
    try {
        const first = await readFilePromise('./content-folder/subfolder/first.txt')
        const second = await readFilePromise('./content-folder/subfolder/second.txt')
        //creates result-async file and write text there
        const result = await writeFilePromise('./content-folder/subfolder/result3-async.txt', `This is using utils promisify : ${first}, ${second}`)
        
        console.log(result)
    } catch (error) {
        console.log(error)
    }
}

start()


const start2 = async () => {
    try {
        const first = await readFile('./content-folder/subfolder/first.txt')
        const second = await readFile('./content-folder/subfolder/second.txt')
        //creates result-async file and write text there
        const result = await writeFile('./content-folder/subfolder/result4-async.txt', `.....This is using inbuilt promises : ${first}, ${second}`, {flag: 'a'})
        
        console.log(result)
    } catch (error) {
        console.log(error)
    }
}

start2()

// const getText = (path) => {
//     return new Promise((resolve, reject) => {
//         readFile(path, 'utf8', (err, result) => {
//             if (err) {
//                 reject(err)
//             }
//             resolve(result)
//         })
//     })
   
// }


// const putText = (path, first, second) => {
//     return new Promise((resolve, reject) => {
//         writeFile(path, `Here is result : ${first}, ${second}`, (err, result) => {
//             if (err) {
//                 reject(err)
//             } 
//             resolve(result)
//         })
//     })
    
// }
