const mongoose = require('mongoose'); 
const { Schema } = mongoose; 

const userSchema = new Schema({
    name: { type: String, required: true},
    lastname: { type: String, required: true},
    email: { type: String, required: true}, 
    password: { type: String, required: true},
    uname: { type: String, required: true},
    Bdate: { type: Date, required: true },
    cdate: { type: Date, default: Date.now },
    open: { type: Boolean, required: true},
    level: { type: String, default: "bronze"},
    img: { type: String, default: "http://denrakaev.com/wp-content/uploads/2015/03/no-image.png"},
    friendList: { type: [String], required: false},
    followList: { type: [String], required: false}
});

module.exports = mongoose.model('User', userSchema);