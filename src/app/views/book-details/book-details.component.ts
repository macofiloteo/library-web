import { Component, OnInit } from '@angular/core';
import { BookService } from 'src/app/core/services/book.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AddCommentDialog } from 'src/app/shared/dialog-add-comment/add-comment.dialog';
import { MatDialog } from '@angular/material/dialog';
import { EditBookDialog } from 'src/app/shared/dialog-edit-book/edit-book.dialog';
import { CheckoutBookDialog } from 'src/app/shared/dialog-checkout-book/checkout-book.dialog';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss'],
})
export class BookDetailsComponent implements OnInit {
  public book: Book;
  public comments: BookComment[] = [];
  public isLoading: boolean = true;
  constructor(
    private _bookService: BookService,
    private _activatedRoute: ActivatedRoute,
    private _router: Router,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this._activatedRoute.params.subscribe((params) => {
      let id = params['id'];
      this._bookService.getSingleBook(id).subscribe((data) => {
        if (data) {
          this.book = data;
          if (data.book_comments.length > 0) {
            this.comments = data.book_comments
              .slice()
              .sort(
                (a, b) =>
                  new Date(b.timestamp).getTime() -
                  new Date(a.timestamp).getTime()
              );
          }
          this.isLoading = false;
        }
      });
    });
  }

  openAddCommentDialog(): void {
    const dialogRef = this.dialog.open(AddCommentDialog, {
      width: '350px',
      data: this.book.id,
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.isLoading = true;
        this._bookService
          .addCommentToBook(result)
          .then(() => {
            window.location.reload();
          })
          .catch(() => {
            this.isLoading = false;
          });
      }
    });
  }

  openEditBookDialog(): void {
    const dialogRef = this.dialog.open(EditBookDialog, {
      width: '350px',
      data: this.book,
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.isLoading = true;
        this._bookService
          .updateBook(result)
          .then(() => {
            window.location.reload();
          })
          .catch(() => {
            this.isLoading = false;
          });
      }
    });
  }

  openCheckoutDialog(): void {
    const dialogRef = this.dialog.open(CheckoutBookDialog, {
      width: '350px',
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.isLoading = true;
        let checkout = result;
        checkout.id = this.book.id;
        this._bookService
          .checkoutBook(checkout)
          .then(() => {
            window.location.reload();
          })
          .catch(() => {
            this.isLoading = false;
          });
      }
    });
  }

  returnBook(): void {
    this.isLoading = true;
    let checkout = { id: this.book.id, willReturn: true };
    this._bookService
      .checkoutBook(checkout)
      .then(() => {
        window.location.reload();
      })
      .catch(() => {
        this.isLoading = false;
      });
  }

  deleteBook(): void {
    this.isLoading = true;
    this._bookService
      .deleteSingleBook(this.book.id)
      .toPromise()
      .then(() => {
        this._router.navigate(['/']);
      })
      .catch(() => {
        this.isLoading = false;
      });
  }
}
