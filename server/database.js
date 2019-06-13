const mongoose = require('mongoose'); 
const URI = "mongodb://localhost/mean-reroll";

//SETTINGS
mongoose.set('useFindAndModify', false);

mongoose.connect(URI, { useNewUrlParser: true }); 

const db = mongoose.connection; 
db.on('error', console.error.bind(console, 'connection error:')); 
db.once('open', function(){
    console.log('Base de datos conectada');
}); 

module.exports = mongoose; 