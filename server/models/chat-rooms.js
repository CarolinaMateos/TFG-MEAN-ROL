const mongoose = require('mongoose'); 
const { Schema } = mongoose; 

const chatrSchema = new Schema({
    id_users: { type: [String], required: true},
    id_characters: {type: [String], required: false},
    id_masters: {type: [String], required: false},
});

module.exports = mongoose.model('Chat-room', chatrSchema);