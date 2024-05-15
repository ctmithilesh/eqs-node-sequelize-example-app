const { Sequelize } = require('sequelize')
// main instance 
const conn = new Sequelize(
    'test',
    'root',
    'admin@123',
    {
        dialect: 'mysql',
        host: 'localhost'
    })

const db = {
    sequelize: Sequelize,
    conn: conn,
    todo: require('./todo.model')(conn, Sequelize)
}

module.exports = db 