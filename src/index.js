require('./db');
const app = require("./app");
const cors = require('cors');



app.use(cors());




app.listen(app.get("port"), ()=>{
    console.log("Servidor arriba",app.get("port") );
});
