const mongoose = require('mongoose')
const Schema = mongoose.Schema

const BenefitsSchema = new Schema ({
  year: {
    type: Number,
    required: true,
    unique: true
  },
  wellness: {
    type: Object,
    required: true
  },
  noWellness: {
    type: Object,
    required: true
  }
})

module.exports = mongoose.model('Benefits', BenefitsSchema)