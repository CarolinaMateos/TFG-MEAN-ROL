const mongoose = require('mongoose'); 
const { Schema } = mongoose; 

const masterSchema = new Schema({
    id_user: { type: String, required: true},
    name: { type: String, required: true},
    identifier: { type: String, required: true},
    cdate: { type: Date, default: Date.now },
    img: { type: String, required: false},
    friendList: [String]
});

module.exports = mongoose.model('Master', masterSchema);