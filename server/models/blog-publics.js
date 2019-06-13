const mongoose = require('mongoose'); 
const { Schema } = mongoose; 

const blogpublicationsSchema = new Schema({
    content: { type: [Schema.Types.Mixed], required: true},
    cdate: { type: Date, default: Date.now }
});

module.exports = mongoose.model('blogPublication', blogpublicationsSchema);