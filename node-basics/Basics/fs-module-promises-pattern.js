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

getText('./content-folder/subfolder/second.txt')
.then((result) => { console.log(result)})
.catch((err) => { console.log(err)})
