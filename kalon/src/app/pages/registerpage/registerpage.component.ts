import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/interfaces/user';
import { Userdto } from 'src/app/interfaces/userdto';
import { AuthserviceService } from 'src/app/services/authservice/authservice.service';
import { JWTServiceService } from 'src/app/services/jwtservice/jwtservice.service';

@Component({
  selector: 'app-registerpage',
  templateUrl: './registerpage.component.html',
  styleUrls: ['./registerpage.component.css']
})
export class RegisterpageComponent {
  constructor(private authService: AuthserviceService, private jwtService: JWTServiceService, private routes: Router) {}
  
  registerForm = new FormGroup({
    name: new FormControl(''),
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl('')
  });

  signUp(registerForm: FormGroup) {
    console.log("Request values " + registerForm.value )
    this.authService.registerUser(registerForm.value).subscribe(
      (res: User) => {
        console.log(res)
        alert('User registered Successful')
      },
      (error: HttpErrorResponse) => {
        console.log(error.message);
        alert('User registration failed' + error.message);
      }
    )
  }

}
