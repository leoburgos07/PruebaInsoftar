const User = require('../models/User');


const crearusuario = async(req, res) => {
    try {
        const usuario = new User(req.body);
        const correo = req.body.email;
        const dni = req.body.cc;
        const email = await User.findOne({email : correo});
        const cedula = await User.findOne({cc : dni});
        if(email){
            res.json({success: false,msg: "Email ya existe"});
        }
        if(cedula){
            res.json({success: false,msg: "La cc ya existe"});
        }
        
        console.log(email)
        await usuario.save();
        res.json({success : true, usuario });
    }catch (e){
        console.log(e);
        res.send(e);
        next();
    }
}

const listarUsuarios = async (req, res) => {
    try{
        const usuarios = await User.find();
        res.status(usuarios.length === 0 ? 404 : 200).send(usuarios);
    }catch(e){
        console.log(e);
        res.send(e);
        next();
    }
    
}
const editarUsuario = async(req,res) => {
    try {
        const {id} = req.params;
        
        
        
        const usuario = await User.findById(id);     
        if(!usuario){
            return res.status(404).json({
                success: false,
                msg: 'No existe el usuario'
              })
        }      
        const email = req.body.email;
        const cc = req.body.cc;
        const correo = await User.findOne({email});
        const cedula = await User.findOne({cc});
        
        if(correo){
            res.json({success: false,msg: "Email ya existe"});
        }
        if(cedula){
            res.json({success: false,msg: "La cc ya existe"});
        }

        const usuarioActualizado = await User.findByIdAndUpdate(
            id,
            {...req.body}
        );
        res.json({
            msg : "usuario actualizado correctamente",
            usuarioActualizado
        });
    } catch (e) {
        res.json({
            success:false,
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