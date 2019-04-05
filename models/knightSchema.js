let mongoose = require('mongoose');

let Schema = mongoose.Schema;

let knightSchema = new Schema({
    name : {
        type:String,
        required: true,
        max:45
    },

    nickname:{
        type:String,
        required: true,
        max:45
    },

    birthday:{
        type:Date,
        default:Date.now
    },

    weapons: [{
        name:{
            type:String,
        required: true,
        max:45
        },
        mod: Number,
        attr: String,
        eqquiped: Boolean
    }],

    attributes:[{
        
        strength: {
            type:Number,
             min:0,
             max:20
        },

        dexterity: {
            type:Number,
             min:0,
             max:20
        },

        constitution: {
            type:Number,
             min:0,
             max:20
        },

        inteligence: {
            type:Number,
             min:0,
             max:20
        },

        wisdom: {
            type:Number,
             min:0,
             max:20
        },

        charisma: {
            type:Number,
             min:0,
             max:20
        },

     

    }],
    keyAttribute: String
})


module.exports = mongoose.model("Knight", knightSchema);