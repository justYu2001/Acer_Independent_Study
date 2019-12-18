const mongoose = require('mongoose');

const Raspberry_Pi_Schema = mongoose.Schema({
    _id: String,
    user: Array,
    device: [{
        _id: String,
        name: String,
        status: Boolean
    }]
});

module.exports = mongoose.model('Raspberry_Pi_list', Raspberry_Pi_Schema);