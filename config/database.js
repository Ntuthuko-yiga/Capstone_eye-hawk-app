const { createPool } = require("mysql");
const pool = createPool({
    port: 6780,
    host: "localhost",
    user: "root",
    password:"",
    database: "test",
    connectionLimit: 10
});

module.exports = pool;