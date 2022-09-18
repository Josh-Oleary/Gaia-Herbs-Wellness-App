const mongoose = require('mongoose')
const Schema = mongoose.Schema

const UserSchema = new Schema ({
    id: {
        type: String,
        required: true,
        unique: true
    },
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true
    },
    points: {
        type: Object,
        required: true,
        default: {}
    },
    isAdmin: {
        type: Boolean,
        required: true,
        default: false
    },
    active: {
        type: Boolean,
        required: false,
        default: true
    }
})

module.exports = mongoose.model('User', UserSchema)