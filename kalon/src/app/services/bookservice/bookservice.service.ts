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

  constructor(private http: HttpClient) { }
}
