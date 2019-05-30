const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 255
    }
})



const Todo = mongoose.model('Todo', todoSchema)
module.exports = Todo;


// next up write code for multiple channels, slack sends the channel name with
// the request