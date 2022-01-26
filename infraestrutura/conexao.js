const mysql = require('mysql')


const conexao = mysql.createConnection({
    host: process.env.NODE_ENV_DATABASE_HOST,
    port: process.env.NODE_ENV_DATABASE_PORT,
    user: process.env.NODE_ENV_DATABASE_USER,
    password: process.env.NODE_ENV_DATABASE_PASSWORD,
    database: process.env.NODE_ENV_DATABASE_NAME
})


module.exports = conexao