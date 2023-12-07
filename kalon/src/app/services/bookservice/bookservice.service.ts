import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Book } from 'src/app/interfaces/book';

@Injectable({
  providedIn: 'root'
})
export class BookserviceService {

private borrowBookurl = "http://localhost:8081/api/viewBorrowedBooks";

private availableBookurl = "http://localhost:8081/api/viewAvailableBooks";

private addbookurl = "http://localhost:8081/api/addbooks";


  getBorrowedBooks(): Observable<Book[]> {
    return this.http.get<Book[]>(this.borrowBookurl);
  }

  getAvailableBooks(): Observable<Book[]> {
    return this.http.get<Book[]>(this.availableBookurl);
  }
 

  addBook(newBook: Book): Observable<Book> {
    return this.http.post<Book>(this.addbookurl, newBook);
  }

  getAllBooks2(): Book[] {
    return this.bookList2;
  }

  bookList2: Book[] = [
    {
      title: "The Man, The Myth",
      edition: "3rd Edition",
      author: "Ken Walibora",
      publisher: "Macmillan",
      publicationDate: "20-12-2023",
    },
    {
      title: "The Man, The Myth",
      edition: "3rd Edition",
      author: "Ken Walibora",
      publisher: "Macmillan",
      publicationDate: "20-12-2023",
    },
    {
      title: "The Man, The Myth",
      edition: "3rd Edition",
      author: "Ken Walibora",
      publisher: "Macmillan",
      publicationDate: "20-12-2023",
    },
    {
      title: "The Man, The Myth",
      edition: "3rd Edition",
      author: "Ken Walibora",
      publisher: "Macmillan",
      publicationDate: "20-12-2023",
    },
    {
      title: "The Man, The Myth",
      edition: "3rd Edition",
      author: "Ken Walibora",
      publisher: "Macmillan",
      publicationDate: "20-12-2023",
    },
    {
      title: "The Man, The Myth",
      edition: "3rd Edition",
      author: "Ken Walibora",
      publisher: "Macmillan",
      publicationDate: "20-12-2023",
    },
    {
      title: "The Man, The Myth",
      edition: "3rd Edition",
      author: "Ken Walibora",
      publisher: "Macmillan",
      publicationDate: "20-12-2023",
    },
    {
      title: "The Man, The Myth",
      edition: "3rd Edition",
      author: "Ken Walibora",
      publisher: "Macmillan",
      publicationDate: "20-12-2023",
    },
    {
      title: "The Man, The Myth",
      edition: "3rd Edition",
      author: "Ken Walibora",
      publisher: "Macmillan",
      publicationDate: "20-12-2023",
    },
    {
      title: "The Man, The Myth",
      edition: "3rd Edition",
      author: "Ken Walibora",
      publisher: "Macmillan",
      publicationDate: "20-12-2023",
    },
    {
      title: "The Man, The Myth",
      edition: "3rd Edition",
      author: "Ken Walibora",
      publisher: "Macmillan",
      publicationDate: "20-12-2023",
    },
    {
      title: "The Man, The Myth",
      edition: "3rd Edition",
      author: "Ken Walibora",
      publisher: "Macmillan",
      publicationDate: "20-12-2023",
    }
  ];

  constructor(private http: HttpClient) { }
}
