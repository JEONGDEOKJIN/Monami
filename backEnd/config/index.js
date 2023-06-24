const dot = require('dotenv').config();


// Print environment variables to console
console.log(process.env.DATABASE_USERNAME);
console.log(process.env.DATABASE_PASSWORD);
console.log(process.env.DATABASE_NAME);
console.log(process.env.DATABASE_HOST);



const config = {
    dev: {
        username : process.env.DATABASE_USERNAME,
        password : process.env.DATABASE_PASSWORD,
        database : process.env.DATABASE_NAME,
        host : process.env.DATABASE_HOST,
        dialect : "mysql"
    }
}

module.exports = config;