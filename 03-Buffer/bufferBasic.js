const {Buffer} = require("buffer");
// const buf = Buffer.alloc(4);
// console.log(buf);


// const buf = Buffer.from("hello chai");
// console.log(buf);
// console.log(buf.toString());

// const buftwo = Buffer.allocUnsafe(10);       //allocUnsafe does not clean the memory it is Uninitialized memory.
// console.log(buftwo);


// const buf = Buffer.alloc(10);
// buf.write("hello");
// console.log(buf.toString());                 //hello

// const buf = Buffer.from("chai aur code");
// console.log(buf.toString());
// console.log(buf.toString("utf8", 0,4 ));     //chai

// const buf = Buffer.from("Chai");
// console.log(buf);                            //<Buffer 43 68 61 69>
// console.log(buf.toString());                 //Chai
// buf[0] = 0x4A;
// console.log(buf);                            //<Buffer 4a 68 61 69>
// console.log(buf.toString());                  //Jhai


const buf1 = Buffer.from("Chai aur");
const buf2 = Buffer.from("code");
const merged = Buffer.concat([buf1, buf2]);
console.log(merged.toString());                 //Chai aurcode
console.log(merged.length);                     // 12