const db = require('../models')
const Todo = db.todo

exports.addTodo = async (req, res) => {

    const { todo } = req.body

    Todo.create({todo: todo })
        .then(data => {
            res.send(data)
        })
        .catch(err => {
            res.status(500).send(err)
        })

}