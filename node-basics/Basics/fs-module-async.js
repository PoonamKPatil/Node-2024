const {readFile, writeFile} = require('fs')


//callback hell
const first = readFile('./content-folder/subfolder/first.txt', 'utf8', (err, result) => {
    if (err) {
        console.log(err);
        return;
    } 
    const first = result

    readFile('./content-folder/subfolder/second.txt', (err, result) => {
        if (err) {
            console.log(err);
            return;
        } 
        const second = result

        writeFile('./content-folder/subfolder/result-async.txt', `Here is result : ${first}, ${second}`, (err, result) => {
            if (err) {
                console.log(err);
                return;
            } 
            console.log(result);
    
        })
    })


})