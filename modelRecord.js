const mongoose = require('mongoose');

const recordSchema = new mongoose.Schema(
    {
        jobDate: {
            type: Date,
            require: true
        },
        startTime: {
            type: Date,
            require: true
        },
        endTime: {
            type: Date,
            require: true
        },
        lunch: {
            type: Number,
            require: true
        },
        description: {
            type: String,
            require: true
        },
        client: {
            type: String,
            require: true
        }
    },
    {versionKey: false}
);

const records = new mongoose.model('records', recordSchema);

module.exports = { records };