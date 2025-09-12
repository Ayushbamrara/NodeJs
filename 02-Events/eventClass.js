const EventEmitter = require("events");

class Chat extends EventEmitter{
    sendMessage(msg){
        console.log(`Message sent : ${msg}`)
        this.emit("MessageRecieved", msg);
    }
}
const chat = new Chat()
chat.on("MessageRecieved", (msg)=>{
    console.log(`Message recieved ${msg}`)
})

//Trigger Event
chat.sendMessage("hello ayush");