import { Component } from '@angular/core';
import { JWTServiceService } from 'src/app/services/jwtservice/jwtservice.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {

  constructor(private jwtService: JWTServiceService){}
 

  show: boolean = false;


  logged_user: boolean = this.jwtService.isLoggedIn();
}
