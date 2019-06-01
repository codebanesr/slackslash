const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    maxlength: 255
  },
  channel_id: {
    type: String,
    maxlength: 255,
    required: true
  }
});

const Todo = mongoose.model("Todo", todoSchema);
module.exports = Todo;

// next up write code for multiple channels, slack sends the channel name with
// the request
