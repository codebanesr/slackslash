const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 255
    },
    created_by: {
        type: String,
        minlength: 4
    }
})



const Todo = mongoose.model('Todo', todoSchema)
module.exports = Todo;