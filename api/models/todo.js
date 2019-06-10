const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create ninja Schema & model
const TodoSchema = new Schema({
  title: {
    type: String,
    required: [true, 'Name field is required']
  },
  description: {
    type: String
  },
  date: {
    type: Date,
    default: Date.now
  }
});

const Todo = mongoose.model('todo', TodoSchema);

module.exports = Todo;