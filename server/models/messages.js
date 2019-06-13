const mongoose = require('mongoose'); 
const { Schema } = mongoose; 

const messageSchema = new Schema({
    id_user: { type: String, required: true},
    id_chat_room: {type: String, required: true},
    id_character: {type: String, required: false},
    content: {type: String, require: true},
    cdate: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Message', messageSchema);