const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://surajvsonkar:W6MTjvIbEeqwlDWq@cluster0.z1ncq.mongodb.net/todoApp')

const todoSchema = mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
})

const todo = mongoose.model("todos", todoSchema)

module.exports = {
    todo
}