import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
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
    firstName: this.jwtService.getFName(),
    lastName: this.jwtService.getLName(),
    email: this.jwtService.getEmailId(),
    password: '',
  }

  addBookForm = new FormGroup({
    title: new FormControl(
      '', 
      [ Validators.required,
        Validators.minLength(4),
    ]
    ),
    publisher: new FormControl(
      '', 
      [ Validators.required,
        Validators.minLength(4),
    ]
    ),
    edition: new FormControl(
      '', 
      [ Validators.required,
        Validators.minLength(1),
    ]
    ),
    author: new FormControl(
      '', 
      [ Validators.required,
        Validators.minLength(4),
    ]
    ),
    pud: new FormControl(
      '', 
      [ Validators.required,
    ]
    )
  });

  

  addBook(addBookForm: FormGroup) {
    if(this.jwtService.isLoggedIn()){
    console.log("Request values " + addBookForm.value )

    if( this.addBookForm.controls.title.valid && 
        this.addBookForm.controls.publisher.valid && 
        this.addBookForm.controls.author.valid && 
        this.addBookForm.controls.edition.valid) {

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
      } else {
        console.log("Checking Validation")
        alert("Kindly fill the book details correctly")
      }
    
  } else { this.routes.navigateByUrl('/login');}
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
      // case 3: 
      //   this.page = 3;
      //   break;
      // case 4: 
      //   this.page = 4;
      //   break;
      case 5: 
        this.page = 5;
        break;
      default:
        this.page = 5
        break;

    }
      
    }

}
function forbiddenNameValidator(arg0: RegExp): import("@angular/forms").ValidatorFn {
  throw new Error('Function not implemented.');
}

