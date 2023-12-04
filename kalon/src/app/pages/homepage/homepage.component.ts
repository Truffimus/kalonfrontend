import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/interfaces/book';
import { BookserviceService } from 'src/app/services/bookservice/bookservice.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  bookList: Book[] = [];
  bookList2: Book[] = [];

  constructor(private bookService: BookserviceService,  ) {
    this.bookList2 = this.bookService.getAllBooks2()
  }
  ngOnInit(): void{
    this.getAllBooks();
  }
  
  public getAllBooks() {
    this.bookService.getAllBooks().subscribe(
      (response: Book[]) => {
        this.bookList = response;
        console.log(response)
      }
    )
  }
}
