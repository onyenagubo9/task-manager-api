const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
  user: {                 // Reference to the User who owns the task
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  status: {
    type: String,
    enum: ['Pending', 'Completed'],
    default: 'Pending',
  },
}, {
  timestamps: true,       // Automatically adds createdAt and updatedAt fields
});

module.exports = mongoose.model('Task', TaskSchema);
