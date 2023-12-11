import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Book } from 'src/app/interfaces/book';
import { Booking } from 'src/app/interfaces/booking';
import { Borrow } from 'src/app/interfaces/borrow';

@Injectable({
  providedIn: 'root'
})
export class BookserviceService {

private borrowBookurl = "http://localhost:8081/api/viewBorrowedBooks";

private availableBookurl = "http://localhost:8081/api/viewAvailableBooks";

private addBookurl = "http://localhost:8081/api/addbook";

private assignBookurl = "http://localhost:8081/api/assignbook";

private returnBookurl = "http://localhost:8081/api/returnbook";

private deleteBookurl = "http://localhost:8081/api/removebook/";

private getBookDetailsurl = "http://localhost:8081/api/bookdetails/";

  getBorrowedBooks(): Observable<Book[]> {
    return this.http.get<Book[]>(this.borrowBookurl);
  }

  getAvailableBooks(): Observable<Book[]> {
    return this.http.get<Book[]>(this.availableBookurl);
  }

  getBookDetailsById(id: number): Observable<Book> {
    return this.http.get<Book>(`${this.getBookDetailsurl+id}`)
  }
 
  addBook(newBook: Book): Observable<Book> {
    return this.http.post<Book>(this.addBookurl, newBook);
  }

  deleteBook(id: number): Observable<Book> {
    return this.http.delete<Book>(`${this.deleteBookurl+id}`)
  }

  assignBook(booking: Booking): Observable<Borrow> {
    return this.http.patch<Borrow>(`${this.assignBookurl}`, booking);
  }

  returnBook(booking: Booking): Observable<Borrow> {
    return this.http.patch<Borrow>(`${this.returnBookurl}`, booking);
  }

  constructor(private http: HttpClient) { }
}
