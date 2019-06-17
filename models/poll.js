const mongoose = require('mongoose');

const optionSchema = new mongoose.Schema({
    options: String,
    votes: {
        type: Number,
        default: 0
    }
});
const pollSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    question: {
        type: String,
        options: [optionSchema],
        voted: [{type: mongoose.Schema.Types.ObjectId, ref: 'User'}] // to keep track of all the ids in User model
    }
});

module.exports = mongoose.model('Poll', pollSchema);