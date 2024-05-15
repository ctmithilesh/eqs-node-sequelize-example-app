module.exports = app => {
    const router = require('express').Router()
    const TodoController = require('../controllers/todo.controller')

    router.post('/todo/add', TodoController.addTodo)


    app.use('/api', router)
}