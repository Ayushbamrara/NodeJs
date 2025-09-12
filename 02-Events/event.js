
const EventEmitter = require("events");
const eventEmitter = new EventEmitter();

/*
eventEmitter.on('greet' , ()=> {
    console.log("Hello and welcome to events");
})

eventEmitter.emit('greet'); 

eventEmitter.on('greet' , (username) => {
    console.log(`Hello ${username} , welcome to events`);
})

eventEmitter.emit('greet' , 'Ayush');
*/


// Listener which run Only once no matter what.
eventEmitter.once('pushNotify', ()=> {
    console.log("This event will only run once");
})

eventEmitter.emit("pushNotify")  // This event will only run once
eventEmitter.emit("pushNotify")  // it will not run


const myListener = ()=> {
    console.log("I am a test listener")
}
eventEmitter.on("test", myListener);
eventEmitter.emit("test");
eventEmitter.removeListener("test", myListener);
eventEmitter.emit("test")