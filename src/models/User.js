const { Schema, model } = require('mongoose');

const UserSchema = new Schema({
    nombres : { type : String , required : true},
    apellidos : { type : String , required : true},
    cc : { type : String , required : true, unique: true}, 
    phone : { type : String , required : true}, 
    email : { type : String , required : true, unique: true, lowercase: true } 
},{
    timestamps: {createdAt: true, updatedAt: true}
});

module.exports = model('User',UserSchema);