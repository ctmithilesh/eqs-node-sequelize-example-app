const express = require('express')

const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
const db = require('./models')

// verify db connection 
db.conn.authenticate()
    .then(res => {
        console.log('DB Connected')
    })
    .catch(err => {
        console.error(err)
    })

// sync db models     
db.conn.sync()

require('./routes/todo.routes')(app)
app.get('/', (req, res) => {
    res.send({ message: "Hello" })
})

app.listen(5000, () => {
    console.log('Server Started')
})