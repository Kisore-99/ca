const mongoose= require('mongoose');
const Schema= mongoose.Schema;
//card_num,cvv,card_holder_name,expiry
//card schema           s
const cardSchema= Schema({
    email: {
        type: String,
        required: true
    },
    card_num: {
        type: Number,
        required: true
    },
    cvv: {
        type: String,
        required: true
    },
    card_holder_name: {
        type: String,
        required: true
    },
    expiry: {
        type: Date,
    }
})

module.exports= Card= mongoose.model("cards", cardSchema);