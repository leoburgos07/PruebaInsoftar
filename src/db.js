const mongoose = require('mongoose');



MONGODB_URI = `mongodb://localhost/usuarios`;

mongoose.connect(MONGODB_URI, {
    useUnifiedTopology : true,
    useNewUrlParser : true,
    useCreateIndex:true,
    useFindAndModify: false
}).then(db => console.log('Base de datos conectada'))
  .catch(err => console.log(err));