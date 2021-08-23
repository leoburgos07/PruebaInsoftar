require('./db');
const app = require("./app");
const cors = require('cors');



app.use(cors());


app.use(require('./routes/users'));






app.listen(app.get("port"), ()=>{
    console.log("Servidor arriba",app.get("port") );
});
