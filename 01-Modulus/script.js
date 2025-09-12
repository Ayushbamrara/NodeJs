// Task - read file and prints its data 

// [Sync] - Blocking method
console.log("Start\n");
const fs = require("node:fs");
const content  = fs.readFileSync("copy.txt", "utf-8");
console.log(content)
console.log("End Of Script")

/* output 
Start

Three types of modules -
1. Third party modules
2. Built in modules
3. custom module

hey
End Of Script */


// [Async] - Non Blocking
console.log("Start\n");
const fss = require("node:fs");                                                        // fs is taken as fss bcz fs is already taken in above code
const contents  = fss.readFile("copy.txt", "utf-8", function(error, data){
    if(error) console.log(error);
    else console.log(data);
});
console.log("End Of Script")

/* Output 
Start

End Of Script
Three types of modules -
1. Third party modules
2. Built in modules
3. custom module

hey */