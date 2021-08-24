require('./db');
const app = require("./app");


app.use(require('./routes/users'));


app.listen(app.get("port"), ()=>{
    console.log("Servidor arriba",app.get("port") );
});
