
const mongoose = require('mongoose');

const habitSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  status: {
    type: String,
    enum: ['Done', 'Not done', 'None'],
    default: 'None',
  },
});

const Habit = mongoose.model('Habit', habitSchema);

module.exports = Habit;
