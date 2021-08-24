import { Component, OnInit } from '@angular/core';
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

  constructor(private userService: UserService) {
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
  addUser(event : any){
    event.preventDefault();
    const user : User = {
      nombres : this.nombres,
      apellidos : this.apellidos,
      cc : this.cc,
      phone : this.phone,
      email : this.email
    }
    
    this.userService.addUser(user).subscribe(user => {
      
      this.getUsuarios();
      this.nombres = "";
      this.apellidos = "";
      this.cc = "";
      this.phone = "";
      this.email = "";
      
    });
  }
}
