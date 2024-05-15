module.exports = (conn, Sequelize) => {

    const Todo = conn.define("Todo", {
        todo: {
            type: Sequelize.STRING
        }
    })
    return Todo

}

