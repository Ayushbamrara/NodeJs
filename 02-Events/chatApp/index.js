const ChatRoom = require("./chatRoom.js");

const chat = new ChatRoom();

chat.on("join", (user)=>{
    console.log(`${user} has joined the chat`);
})

chat.on("message", (user, message)=>{
    console.log(`${user} : ${message}`);
})

chat.on("leave", (user)=>{
    console.log(`${user} has left the chat`);
})

//simulating the chat

chat.join('alice');
chat.join('bob');

chat.sendMessage('alice' , "hey bob , hello to everyone")
chat.sendMessage('bob' , "hey alice , hello to everyone")

chat.leave('alice');
chat.sendMessage('alice','this message cant be send')