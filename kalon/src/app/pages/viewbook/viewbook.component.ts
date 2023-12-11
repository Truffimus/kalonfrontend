import { HttpErrorResponse } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Book } from 'src/app/interfaces/book';
import { Borrow } from 'src/app/interfaces/borrow';
import { BookserviceService } from 'src/app/services/bookservice/bookservice.service';
import { JWTServiceService } from 'src/app/services/jwtservice/jwtservice.service';

@Component({
  selector: 'app-viewbook',
  templateUrl: './viewbook.component.html',
  styleUrls: ['./viewbook.component.css']
})
export class ViewbookComponent {
    
  constructor(private bookService: BookserviceService, private jwtService: JWTServiceService, private routes: Router) { }

  route: ActivatedRoute = inject(ActivatedRoute);
  book!: Book;

  ngOnInit(): void {
    console.log("ngoninit");
    this.getHouseDetails();
  }

  public getHouseDetails(){
    const bookId = Number(this.route.snapshot.params['id']);
    this.bookService.getBookDetailsById(bookId).subscribe(
      (response: Book) => {
        this.book = response;
        console.log(response)
        
      },
      (error: HttpErrorResponse) => {
        console.log("This is the error message: "+error.message);
        alert(error.message)
      }
    );
  }

  public assignBook(){
    if(this.jwtService.isLoggedIn()){

      const userEmail = this.jwtService.getEmailId();

      console.log("This is my user email "  + userEmail)
      console.log("This is the book Id "  + Number(this.route.snapshot.params['id']))

      let booking = {
        bookId: Number(this.route.snapshot.params['id']),
        memberEmail: userEmail,
      }
      
      this.bookService.assignBook(booking).subscribe(
        (res: Borrow) => {
          console.log(res);
          alert('Book assigned Succesfully')

          this.routes.navigate(['/'])
          .then(() => {
              window.location.reload();
        });
        },
        (error: HttpErrorResponse) => {
          console.log("Error Response " + error.error.message)
          alert('Book Failed to be assigned: ' + error.error.message)
        }
      )

    } else { this.routes.navigateByUrl('/login');}
    
  }

}