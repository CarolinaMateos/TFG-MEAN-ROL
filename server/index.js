const express = require('express');
const morgan = require('morgan');
const app = express();
const cors = require('cors');
 
const { mongoose } = require("./database");


/* SETTING */
app.set('port', process.env.PORT || 3000); 

/* MIDDLEWARES */
app.use(morgan('dev')); 
app.use(express.json()); /* BodyParser */
app.use(cors({
  origin: 'http://localhost:4200'
})); 

/* ROUTES */
app.use(express.static('dist/frontend'));
app.use('/api/users', require('./routes/users.routes')); 
app.use('/api/files', require('./routes/masters.routes')); 
app.use('/api/characters', require('./routes/characters.routes')); 
app.use('/api/publications', require('./routes/upublications.routes')); 
app.use('/api/chatrooms', require('./routes/chat.routes')); 
app.use('/api/messages', require('./routes/messages.routes')); 
app.use('/api/games', require('./routes/game.routes')); 
app.use('/api/blog', require('./routes/blog.routes')); 

/* STATIC FILES */

/* SERVER STARTING */

app.listen(app.get('port'), () => {
  console.log("server on load port", app.get('port'));
});
