const express = require('express');
const app = express();
const cors = require('cors');


app.use(cors());



app.use(express.json());

app.set('port', process.env.PORT || 4000 );
app.use(require('./routes/users.js'))

module.exports =app;