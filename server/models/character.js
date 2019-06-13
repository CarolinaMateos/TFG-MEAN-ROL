const mongoose = require('mongoose'); 
const { Schema } = mongoose; 

const characterSchema = new Schema({
    id_user: { type: String, required: true},
    name: { type: String, required: true},
    identifier: { type: String, required: true},
    file: { type: String, required: false},
    npc: { type: Boolean, required: true},
    img: { type: String, default: "http://denrakaev.com/wp-content/uploads/2015/03/no-image.png"},
    cdate: { type: Date, default: Date.now },
    friendList: [String]
});

module.exports = mongoose.model('Character', characterSchema);