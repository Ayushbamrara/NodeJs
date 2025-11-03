require("dotenv/config");
const {db, connectDB} = require("./db");
const {userTable} = require("./drizzle/schema");

async function getAllUsers(){
    const users = await db.select().from(userTable)
    console.log("User in db ", users)
    return users;
}
 
async function createUser({id , name , email}) {
    await db.insert(userTable).values({
        id,
        name,
        email,
    });
}

createUser({id:1, name:"ayush", email:"ayushbamrara10@gmail.com"});