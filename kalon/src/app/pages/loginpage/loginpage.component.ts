import { HttpErrorResponse } from '@angular/common/http';
import { Component, Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthserviceService } from 'src/app/services/authservice/authservice.service';
import { JWTServiceService } from 'src/app/services/jwtservice/jwtservice.service';

@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.css'],
})
@Injectable({ providedIn: 'platform' })
export class LoginpageComponent {
  
  constructor(private authService: AuthserviceService, private jwtService: JWTServiceService, private routes: Router) {}
  
  loginForm = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  });

  signIn(loginForm: FormGroup) {
    console.log("Request values " + loginForm.value )
    this.authService.login(loginForm.value).subscribe(
      (res) => {
        console.log("Response " + res)

        alert('Login Successful');

        this.jwtService.setToken(res);

        this.routes.navigate(['/'])
          .then(() => {
              window.location.reload();
        });

        const userName = this.jwtService.getUserName();

        const userId = this.jwtService.getUserId();

        console.log(userName);

        console.log(userId);
        
      },
      (error: HttpErrorResponse) => {
        console.log("Error Response " + error.message)
        alert('Login Failed')
      }
    )
  }
}
