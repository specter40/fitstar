const mongoose = require('mongoose');

const ItemSchema = new mongoose.Schema({
    exerciseType: {
        type: String,
        required: true
    },
    user: {
        type: String,
        required: true
    },
    caloriesBurned: {
        type: String
    },
    heartRate: {
        type: String
    },
    exerciseDuration: {
        type: String
    },
    date: {    
        type: String,
        // default: Date.now,
    }
});

module.exports = Item =  mongoose.model('item', ItemSchema);