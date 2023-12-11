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
      
        this.bookService.deleteBook(bookid).subscribe(
          (res: Book) => {
            console.log("Response " + res)
    
            alert('Book Deleted Successfully');

            window.location.reload();
            
          },
          (error: HttpErrorResponse) => {
            console.log("Error Response " + error.message)
            alert('Operation Failed')
          }
        )
      

    } else { this.routes.navigateByUrl('/login');}
    
  }

}
