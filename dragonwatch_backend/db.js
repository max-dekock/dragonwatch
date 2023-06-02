const mysql = require('mysql');

const pool = mysql.createPool({
    host: 'classmysql.engr.oregonstate.edu',
    user: 'cs340_dekockm',
    password: '0169', // this is bad, don't do this in production lol
    database: 'cs340_dekockm'
});

module.exports = pool;
