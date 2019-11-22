const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema(('Task', {
    description: {
        type: String,
        required: true,
        trim: true
    },
    completed: {
        Type: Boolean,
        default: false
    }
}))

const Task = mongoose.model('Task', TaskSchema);

module.exports = Task