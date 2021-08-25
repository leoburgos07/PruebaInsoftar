import { Component, OnInit } from '@angular/core';
import {  NgForm } from '@angular/forms';
import { User } from '../../models/User';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-listar-usuarios',
  templateUrl: './listar-usuarios.component.html',
  styleUrls: ['./listar-usuarios.component.css'],
})
export class ListarUsuariosComponent implements OnInit {
  usuarios!: User[];
  _id!: String;
  nombres!: string;
  apellidos!: String;
  cc!: String;
  phone!: String;
  email!: String;
  msgError = "";


  constructor(public userService: UserService) {
    
  }
  ngOnInit(): void {
    this.getUsuarios();
  }
  
  getUsuarios() {
    this.userService
      .getUsuarios()
      .subscribe((usuarios) => (this.usuarios = usuarios));
  }
  deleteUser(id: any) {
    if (confirm('Está seguro de eliminar este registro?')) {
      this.userService.deleteUser(id).subscribe(
        (res) => {
          this.getUsuarios();
          console.log(res);
        },
        (err) => console.log(err)
      );
    }
  }
  addUser(form: NgForm){
    if(form.value._id){
      this.userService.editUser(form.value).subscribe((res:any) => {
        if(res.success){
          this.getUsuarios();
          this.resetForm(form);
          this.msgError = "";
         }else{
          this.msgError = res.msg;
          
         }
      });
    }else{
      this.userService.addUser(form.value).subscribe((res: any) => {
       if(res.success){
        this.getUsuarios();
        this.resetForm(form);
        this.msgError = "";
       }else{
        this.msgError = res.msg;
       }
     
    });
    }
    
  }
  editUser(usuario:User){
    this.userService.usuarioSeleccionado = usuario;
    console.log(usuario._id);

  }
  resetForm(form?: NgForm) {
    if (form) {
      form.reset();
      this.userService.usuarioSeleccionado = new User();
    }
}
}


