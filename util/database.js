// const mysql = require('mysql2');

// const pool = mysql.createPool({
//     host: 'localhost',
//     user: 'root',
//     database: 'test',
//     password: 'Password_123'
// });

// module.exports = pool.promise();

const Sequelize = require('sequelize');

const sequelize = new Sequelize('test','root','Password_123',{
    dialect:'mysql',
    host: 'localhost',
});

module.exports = sequelize