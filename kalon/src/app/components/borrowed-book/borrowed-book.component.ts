import { Component, Input } from '@angular/core';
import { Book } from 'src/app/interfaces/book';
import { BookserviceService } from 'src/app/services/bookservice/bookservice.service';

@Component({
  selector: 'app-borrowed-book',
  templateUrl: './borrowed-book.component.html',
  styleUrls: ['./borrowed-book.component.css']
})
export class BorrowedBookComponent {

  
  @Input() book2!: Book;


  constructor(private bookService: BookserviceService) {}
  // onAddBook(title: string, author: string): void {
  //   const newBook: Book = {
  //     title: 'string',
  //     edition: 'string', 
  //     author: 'string',
  //     publisher: 'string',
  //     publicationDate: new Date() 
  //   };

  //   this.bookService.addBook(newBook).subscribe(
  //     (addedBook) => {
  //       console.log('Book added successfully:', addedBook);
  //       // You can perform additional actions after successfully adding a book
  //     },
  //     (error) => {
  //       console.error('Error adding book:', error);
  //       // Handle errors here
  //     }
  //   );
  // }

  resetForm(): void {
    const newBook = { title: '', author: '' };
  }
}