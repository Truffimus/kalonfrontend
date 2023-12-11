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
    name: new FormControl('', 
    [ Validators.required,
      Validators.minLength(3),
  ]),
    firstName: new FormControl(
      '', 
    [ Validators.required,
      Validators.minLength(4),
  ]),
    lastName: new FormControl(
      '', 
      [ Validators.required,
        Validators.minLength(4),
    ]
    ),
    email: new FormControl(
      '', 
      [ Validators.required,
        Validators.minLength(4),
    ]
    ),
    password: new FormControl(
      '', 
      [ Validators.required,
        Validators.minLength(6),
    ]
    )
  });

  signUp(registerForm: FormGroup) {
    console.log("Request values " + registerForm.value )

    if( this.registerForm.controls.name.valid && 
        this.registerForm.controls.firstName.valid && 
        this.registerForm.controls.lastName.valid && 
        this.registerForm.controls.email.valid &&
        this.registerForm.controls.password.valid) {
    this.authService.registerUser(registerForm.value).subscribe(
      (res: User) => {
        console.log(res)
        alert('User registered Successful')

        this.routes.navigate(['/login'])
          .then(() => {
              window.location.reload();
        });
      },
      (error: HttpErrorResponse) => {
        console.log(error.message);
        alert('User registration failed' + error.message);
      }
    )
  } else {
    alert("Kindly fill in peronal details correctly")
  }

}
}
