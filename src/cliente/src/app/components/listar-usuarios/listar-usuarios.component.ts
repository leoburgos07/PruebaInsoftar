import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
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

  constructor(public userService: UserService) {
    //this.userService.getUsuarios().subscribe(usuarios => this.usuarios = usuarios);
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
    console.log("en la funcion addUser",form.value._id);
    if(form.value._id){
      console.log("En el if de actualizar",form.value._id);
      this.userService.editUser(form.value).subscribe(res => {
        console.log( form.value);
        this.getUsuarios();
        this.resetForm(form);
      });
        
    }else{
      console.log("En el else de agregar nuevo", form.value);
      this.userService.addUser(form.value).subscribe((res) => {
      this.getUsuarios();
      this.resetForm(form);
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


