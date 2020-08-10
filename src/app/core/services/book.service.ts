import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { environment } from 'src/environments/environment';

@Injectable()
export class BookService {
  constructor(private http: HttpClient, private store: Store<AppState>) {}

  public getBooks() {
    return this.http.get<Book[]>(`${environment.api}books/`).pipe(
      tap((data) => {
        const sortedBooks = data.sort(
          (a, b) =>
            new Date(b.addedDate).getTime() - new Date(a.addedDate).getTime()
        );
        this.store.dispatch({
          type: 'ADD_ALL_BOOKS',
          payload: sortedBooks,
        } as MyAction);
      })
    );
  }

  public getSingleBook(id: number) {
    return this.http.get<any>(`${environment.api}books/${id}/`).pipe(
      tap((data) => {
        this.store.dispatch({
          type: 'UPDATE_CURRENT_BOOK',
          payload: data,
        } as MyAction);
      })
    );
  }

  public deleteSingleBook(id: number) {
    return this.http.delete<any>(`${environment.api}books/${id}/`);
  }
  public addBook(book) {
    return this.http.post<any>(`${environment.api}books/`, book).toPromise();
  }

  public updateBook(book: Book) {
    return this.http
      .post<any>(`${environment.api}books/${book.id}/`, book)
      .toPromise();
  }

  public checkoutBook(data) {
    return this.http
      .post<any>(`${environment.api}books/checkout/`, data)
      .toPromise();
  }

  public addCommentToBook(comment: BookComment) {
    return this.http
      .post<any>(`${environment.api}books/comments/${comment.book}/`, comment)
      .toPromise();
  }
}
