const mongoose = require('mongoose'); 
const { Schema } = mongoose; 

const publicationsSchema = new Schema({
    id_user: { type: String, required: true},
    id_character: { type: String, required: false},
    content: { type: String, required: true},
    game_room_id: {type: String, required: true},
    numlikes: { type: Number, required: false},
    cdate: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Publication', publicationsSchema);