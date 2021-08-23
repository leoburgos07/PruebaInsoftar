const app = require("./app");


app.listen(app.get("port"), ()=>{
    console.log("Servidor arriba",app.get("port") );
});
