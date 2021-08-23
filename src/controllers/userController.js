const User = require('../models/User');


const crearusuario = async(req, res) => {
    try {
        const usuario = new User(req.body);
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
const listarUsuarios = async (req, res) => {
    try{
        const usuarios = await User.find();
        res.status(usuarios.length === 0 ? 404 : 200).json({
            ok: true,
            usuarios
          });
    }catch(e){
        console.log(e);
        res.send(e);
        next();
    }
    
}
const editarUsuario = async(req,res) => {
    try {
        const {id} = req.params;
        const usuario = await User.findOneAndUpdate(
            id,
            req.body,
            {new : true}
        );
        res.json({
            msg : "usuario actualizado correctamente"
        });
    } catch (e) {
        res.status(400).json({
            msg : "Error de peticion"
        }); 
    }
}
const borrarUsuario = async (req, res) => {
    try {
        const {id} = req.params;
        const usuario = await User.findById(id);

        if(!usuario){
            res.status(404).json({
                msg : "El usuario no existe."
            })
        }
         
       const eliminado =  await User.findByIdAndDelete(id);

        res.status(200).json({
            msg : "El usuario ha sido eliminado exitosamente",
            usuario : eliminado
        });

} catch (e) {
        res.status(400).json({
            msg : "Error de peticion"
        });
    }
}

module.exports = {
    crearusuario,
    listarUsuarios,
    editarUsuario,
    borrarUsuario
}