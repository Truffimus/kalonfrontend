import { Component, Injectable, OnInit } from '@angular/core';
import { Book } from 'src/app/interfaces/book';
import { BookserviceService } from 'src/app/services/bookservice/bookservice.service';

@Component({
  selector: 'app-borrowed-books',
  templateUrl: './borrowed-books.component.html',
  styleUrls: ['./borrowed-books.component.css']
})
export class BorrowedBooksComponent implements OnInit {
  bookList: Book[] = [];

  constructor(private bookService: BookserviceService) {
  }
  ngOnInit(): void{
    this.getAllBooks();
  }
  
  public getAllBooks() {
    this.bookService.getBorrowedBooks().subscribe(
      (response: Book[]) => {
        this.bookList = response;
        console.log(response)
      }
    )
  }
}

