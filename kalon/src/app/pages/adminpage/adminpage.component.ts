import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Book } from 'src/app/interfaces/book';
import { User } from 'src/app/interfaces/user';
import { BookserviceService } from 'src/app/services/bookservice/bookservice.service';
import { JWTServiceService } from 'src/app/services/jwtservice/jwtservice.service';

@Component({
  selector: 'app-adminpage',
  templateUrl: './adminpage.component.html',
  styleUrls: ['./adminpage.component.css']
})
export class AdminpageComponent {

  constructor(private bookService: BookserviceService, private jwtService: JWTServiceService, private routes: Router) {}


  bookList: Book[] = [];

  ngOnInit(): void{
    this.getAllBooks();
  }

  logout(){
    this.jwtService.logout();

    this.routes.navigate(['/'])
          .then(() => {
              window.location.reload();
    });

  }

  user: User = {
    id:  Number(this.jwtService.getUserId()),
    name: this.jwtService.getUserName(),
    firstName: this.jwtService.getUserName(),
    lastName: this.jwtService.getUserName(),
    email: this.jwtService.getEmailId(),
    password: '',
  }

  addBookForm = new FormGroup({
    title: new FormControl(''),
    publisher: new FormControl(''),
    edition: new FormControl(''),
    author: new FormControl(''),
    pud: new FormControl('')
  });

  addBook(addBookForm: FormGroup) {
    console.log("Request values " + addBookForm.value )
    this.bookService.addBook(addBookForm.value).subscribe(
      (res) => {
        console.log("Response " + res)

        alert('Book Added Successfully');
        
      },
      (error: HttpErrorResponse) => {
        console.log("Error Response " + error.message)
        alert('Operation Failed')
      }
    )
  }
  
  public getAllBooks() {
    this.bookService.getAvailableBooks().subscribe(
      (response: Book[]) => {
        this.bookList = response;
        console.log(response)
      }
    )
  }

  public page = 0;

  myMethod(pageId: number){

    console.log("clicked");

    switch(pageId){
      case 0: 
        this.page = 0;
        break;
      case 1: 
        this.page = 1;
        break;
      case 2: 
        this.page = 2;
        break;
      case 3: 
        this.page = 3;
        break;
      case 4: 
        this.page = 4;
        break;
      case 5: 
        this.page = 5;
        break;
      default:
        this.page = 5
        break;

    }
      
    }

}
