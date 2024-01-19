const EventEmitter = require('events')
const customeEmitter = new EventEmitter()


customeEmitter.on('response' , (name, id ) => {
    console.log("data received")
    console.log(`${name} ${id}`)
})
customeEmitter.on('response' , () => {
    console.log("same event another responded")
})
customeEmitter.emit('response', 'poonam',123)