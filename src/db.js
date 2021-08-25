const mongoose = require('mongoose');



MONGODB_URI = `mongodb+srv://leoburgos7:960221leo@cluster0.vqkev.mongodb.net/usuarios?retryWrites=true&w=majority`;

mongoose.connect(MONGODB_URI, {
    useUnifiedTopology : true,
    useNewUrlParser : true,
    useCreateIndex:true,
    useFindAndModify: false
}).then(db => console.log('Base de datos conectada!!'))
  .catch(err => console.log(err));