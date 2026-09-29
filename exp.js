const EventEmitter = require('events');
const ud = new EventEmitter();

ud.on('greet',(name)=> {
    console.log(`Hello ${name}`)

})
ud.on('exit',(num)=> {
    console.log(`thankyou for visit ${num}`)
})

ud.emit('greet', 'ud')
ud.emit('exit', 100)