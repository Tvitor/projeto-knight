const mongoose = require('mongoose')
const Schema = mongoose.Schema
let knightSchema = new Schema ({
    name:{type: String, required: true, max: 100}
})

module.exports = mongoose.model('Knight',knightSchema)