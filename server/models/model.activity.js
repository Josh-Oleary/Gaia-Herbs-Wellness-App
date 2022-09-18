const { MongoExpiredSessionError } = require('mongodb')
const mongoose = require('mongoose')
const Schema = mongoose.Schema


const ActivitySchema = new Schema({
    id: {
        type: String,
        required: true,
        unique: true
    },
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: false
    },
    value: {
        type: Number,
        required: true
    },
    maxUse: {
        type: Number,
        required: true
    },
    active: {
        type: Boolean,
        required: true
    },
    timeSlot: {
        type: Object,
        required: false
    },
    timesClaimed: {
        type: Number,
        required: true,
        default: 0
    }
})

module.exports = mongoose.model('Activity', ActivitySchema)