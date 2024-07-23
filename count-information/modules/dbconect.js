var mysql = require('mysql2');

const connect = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'BMOPpineda1',
    database: 'db_client'
});

connect.connect((err) => {
    if (err) {
        console.error('Error connecting to the database:', err.stack);
        return;
    }
    console.log('Connected to the database');
});

module.exports = connect;