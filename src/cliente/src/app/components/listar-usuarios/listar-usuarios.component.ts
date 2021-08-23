
import { Component, OnInit } from '@angular/core';
import { User } from '../../models/User';
import { UserService } from '../../services/user.service'

@Component({
  selector: 'app-listar-usuarios',
  templateUrl: './listar-usuarios.component.html',
  styleUrls: ['./listar-usuarios.component.css']
})
export class ListarUsuariosComponent implements OnInit {

  usuarios!: User[];
  nombres!: string;
  apellidos!: String;
  cc!: String;
  phone!: String;
  email!: String;

  constructor(private userService: UserService) {}

  getUsuarios(){
    this.userService.getUsuarios().subscribe(usuarios => {
      this.usuarios = usuarios;
      console.log(this.usuarios)
    });
  }



  ngOnInit(): void {
  }

}



