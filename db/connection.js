const mysql = require('mysql2');
require('dotenv').config();

const db = mysql.createConnection (
    {
        host: 'localhost',
        user: ProcessingInstruction.env.DB_USER,
        password: ProcessingInstruction.env.DB_PASSWORD,
        database: ProcessingInstruction.env.DB_NAME
    }
);

module.exports = db;