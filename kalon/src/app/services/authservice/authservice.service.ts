import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthRequest } from 'src/app/interfaces/authrequest';
import { User } from 'src/app/interfaces/user';
import { Userdto } from 'src/app/interfaces/userdto';

@Injectable({
  providedIn: 'root'
})
export class AuthserviceService {

  constructor(private http: HttpClient) { }

  private loginUrl = "http://localhost:8081/api/login";

  private registerUrl = "http://localhost:8081/api/addmember";


    login(authRequest: AuthRequest): Observable<string> {
      return this.http.post(this.loginUrl, authRequest, {responseType: 'text'});
    }
  

    registerUser(newUser: Userdto): Observable<User> {
      return this.http.post<User>(this.registerUrl, newUser);
    }

}
