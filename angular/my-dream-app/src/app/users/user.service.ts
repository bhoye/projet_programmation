import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable} from 'rxjs/Observable';
import {User} from './user';

@Injectable()
export class UserService {
private userUrl='http://localhost:8080/users';

  constructor(private http:HttpClient)
  {

  }
  getUsers():Observable<User[]>
  {
  	return this.http.get<User[]>(this.userUrl);
  }

}
