import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Book } from 'src/app/interfaces/book';

@Injectable({
  providedIn: 'root'
})
export class BookserviceService {

private bookurl = "http://localhost:8080/api/viewbooks";


  getAllBooks(): Observable<Book[]> {
    return this.http.get<Book[]>(this.bookurl);
  }
 private addbookurl = "http://localhost:8080/ap privai/addbooks";

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
