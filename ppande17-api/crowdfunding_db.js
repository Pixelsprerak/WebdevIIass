const mysql = require("mysql2");

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Prerak123',
    database: 'crowdfunding_db',
    port: 3306
});

connection.connect((err) => {
    if (err) {
        console.error('Error connecting to the database:', err);
        process.exit(1);  // Exit the application if unable to connect
    } else {
        console.log('Connected to MySQL database.');
    }
});

module.exports = connection; // Export the connection
