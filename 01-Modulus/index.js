const fs = require('fs');
const content = fs.readFileSync("notes.txt", "utf-8");
// copied content of notes to copy.txt (created copy.txt also)
fs.writeFileSync("copy.txt", content ,"utf-8");
// add new thing to the existing file (append)
fs.appendFileSync("copy.txt", '\n\nhey',"utf-8")

//fs.mkdirSync("game")
// fs.mkdirSync("game/xyz/a")  error
// fs.mkdirSync("game/xyz/a" , {recursive: true})
// fs.rmdirSync("games")  error
// fs.rmdirSync("games/xyz/a")
// fs.rmdirSync("games/xyz")
// fs.rmdirSync("games ")
// fs.unlink('copy.txt') // copy file will  be deleted by this

