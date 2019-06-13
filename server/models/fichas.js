const mongoose = require('mongoose'); 
const { Schema } = mongoose; 

const fichaSchema = new Schema({
    id_user: { type: String, required: true},
    id_character: { type: String, required: true},
    title: { type: String, required: true},
    content: { type: String, required: true},
    cdate: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Ficha', fichaSchema);