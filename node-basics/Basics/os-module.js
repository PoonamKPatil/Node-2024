const os = require('os');

const currentOs = {
    name: os.type(),
    release: os.release(),
    totalMemory: os.totalmem(),
    freeMemory: os.freemem(),
}
console.log(currentOs);


//info about current user
const user = os.userInfo();

console.log(`system uptime ${os.uptime()} seconds`);