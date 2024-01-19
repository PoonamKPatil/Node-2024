const {readFile, writeFile} = require('fs')

const getText = (path) => {
    return new Promise((resolve, reject) => {
        readFile(path, 'utf8', (err, result) => {
            if (err) {
                reject(err)
            }
            resolve(result)
        })
    })
   
}

const putText = (path, first, second) => {
    return new Promise((resolve, reject) => {
        writeFile(path, `Here is result Using async await but with manual creating promise: ${first}, ${second}`, (err, result) => {
            if (err) {
                reject(err)
            } 
            resolve(result)
        })
    })
   
}

const start = async () => {
    try {
        const first = await getText('./content-folder/subfolder/first.txt')
        const second = await getText('./content-folder/subfolder/second.txt')
        //creates result-async file and write text there
        const result = await putText('./content-folder/subfolder/result2-async.txt', first, second)

        console.log(result)
    } catch (error) {
        console.log(error)
    }
}

start()