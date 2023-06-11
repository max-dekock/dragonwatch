const mysql = require('mysql');

const pool = mysql.createPool({
    host: process.env.DBHOST || 'classmysql.engr.oregonstate.edu',
    user: process.env.DBUSER,
    password: process.env.DBPASSWD,
    database: process.env.DBDATABASE
});

module.exports = pool;
