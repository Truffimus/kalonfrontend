import { HttpErrorResponse } from '@angular/common/http';
import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Book } from 'src/app/interfaces/book';
import { BookserviceService } from 'src/app/services/bookservice/bookservice.service';
import { JWTServiceService } from 'src/app/services/jwtservice/jwtservice.service';

@Component({
  selector: 'app-delete-book',
  templateUrl: './delete-book.component.html',
  styleUrls: ['./delete-book.component.css']
})
export class DeleteBookComponent {

   
  @Input() book4!: Book;


  constructor(private bookService: BookserviceService, private jwtService: JWTServiceService, private routes: Router) {}

  public deleteBook(bookid: number){
    if(this.jwtService.isLoggedIn()){

      const userEmail = this.jwtService.getEmailId();

      console.log("This is my user email "  + userEmail)
      console.log("This is the book Id "  + bookid)

      let booking = {
        bookId: bookid,
        memberEmail: userEmail,
      }
      
      this.bookService.returnBook(booking).subscribe(
        (res: any) => {
          console.log(res);
          alert('Book Returned Succesfully')
        },
        (error: HttpErrorResponse) => {
          console.log("Error Response " + error.error.message)
          alert('Book Failed to be returned: ' + error.error.message)
        }
      )

    } else { this.routes.navigateByUrl('/login');}
    
  }

}
