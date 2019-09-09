const mongoose = require('mongoose');

const device_Schema = mongoose.Schema({
    _id: String,
    status: Boolean
});

module.exports = mongoose.model('device', device_Schema);