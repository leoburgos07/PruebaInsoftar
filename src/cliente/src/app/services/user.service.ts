import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators'
import { User } from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  domain : string = 'http://localhost:4000';

  constructor(private http : HttpClient) { }

  getUsuarios(){
    return this.http.get<User[]>(`${this.domain}/`).pipe(map(res => res));
  }
}

