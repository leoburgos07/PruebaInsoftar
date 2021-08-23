const User = require('./User');


const crearusuario = async(req, res) => {
    try {
        const usuario = new usuario(req.body);
        await usuario.save();
        res.json({
            msg : "Usuario creado correctamente!",
            usuario
        });
    }catch (e){
        console.log(e);
        res.send(e);
        next();
    }
}

module.exports = User;