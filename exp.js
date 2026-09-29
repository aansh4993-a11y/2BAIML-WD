const EventEmitter = require('events');
const ansh = new EventEmitter();

ansh.on('greet',(name)=> {
    console.log(`Hello ${name}`)

})
ansh.on('exit',(num)=> {
    console.log(`thankyou for visit ${num}`)
})

ansh.emit('greet', 'ansh')
ansh.emit('exit', 100)