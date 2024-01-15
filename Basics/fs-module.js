const {readFileSync, writeFileSync} = require('fs')

const first = readFileSync('./content-folder/subfolder/test.txt','utf8')
const second = readFileSync('./content-folder/subfolder/second.txt','utf8')

console.log(first);

writeFileSync('./content-folder/subfolder/result-sync.txt',`Hey result of : ${first}, ${second}`, {flag : 'a'})