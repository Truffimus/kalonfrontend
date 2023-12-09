import { Injectable } from '@angular/core';
import jwt_decode from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class JWTServiceService {

    jwtToken: string = '';
    // myToken: any = localStorage.getItem("token")?.toString;
    decodedToken: { [key: string]: string; } | undefined;

    

    constructor() {
    }

    setToken(token: string) {
      if (token) {
        localStorage.setItem("token", token);
        this.jwtToken = token;
      }
    }

    decodeToken() {
      console.log('Decode Token');
      if (localStorage.getItem("token")) {

        console.log('Stored token 1 ' + localStorage.getItem("token"));

        console.log('Stored token 2 ' + this.jwtToken);

        const myToken: any = localStorage.getItem("token");

        console.log('Stored token 3 ' + myToken);


        
      this.decodedToken = jwt_decode(myToken);

      console.log('Decoded token 1' + jwt_decode(myToken));

      console.log('Decoded token 2'+ this.decodedToken);
      }
    }

    getUserName() {
      this.decodeToken();
      return this.decodedToken ? this.decodedToken['username'] : '';
    }

    getUserId() {
      this.decodeToken();
      return this.decodedToken ? this.decodedToken['userId'] : '';
    }

    getEmailId() {
      this.decodeToken();
      return this.decodedToken ? this.decodedToken['email'] : '';
    }

    getExpiryTime() {
      console.log('Get expiry Time');
      this.decodeToken();

      console.log('Token decoded');
      console.log(this.decodedToken)
      return this.decodedToken ? new Date(this.decodedToken['exp']) : Date.now;
    }

    isTokenExpired(): boolean {

      console.log('Check Token expiry');
      const expiryTime: any = this.getExpiryTime();

      console.log("This is the Expiry time: " + expiryTime);

      const calc: number = ((1000 * expiryTime) - (new Date()).getTime());

      console.log("This is calc number:"+ calc);

      if (((1000 * Number(expiryTime)) - (new Date()).getTime()) < 5000) {
        return true;
      } else {
        return false;
      }
    }

    public isLoggedIn(): boolean {
      console.log("Check log in status")
      if(localStorage.hasOwnProperty('token')){
        if(localStorage.getItem('token') && this.isTokenExpired()){
          console.log("Log In Status: false");
          return false;
        }  else {
          console.log("Log In Status: true");
          return true;
      } 
      } else {
        console.log("Log In Status: false");
        return false;
      }
     
    }

    public isLoggedOut(): boolean {
      return !this.isLoggedIn();
    }

    public logout(){
      localStorage.removeItem("token");
    }
}