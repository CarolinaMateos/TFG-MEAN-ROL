const mongoose = require('mongoose'); 
const { Schema } = mongoose; 

const gameSchema = new Schema({
    title: { type: String, required: true},
    id_user: { type: String, required: true},
    players: { type: [String], required: false}, 
    description: {type: String, required: false},
    password: { type: String, default: ""},
    cdate: { type: Date, default: Date.now },
    open: { type: Boolean, required: true},
    img: { type: String, default: "http://denrakaev.com/wp-content/uploads/2015/03/no-image.png"}
});

module.exports = mongoose.model('Game', gameSchema);