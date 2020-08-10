import { Component, OnInit } from '@angular/core';
import { AddBookDialog } from 'src/app/shared/dialog-add-book/add-book.dialog';
import { MatDialog } from '@angular/material/dialog';
import { BookService } from 'src/app/core/services/book.service';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public books: Array<any>;
  public addBookData: any;
  displayedColumns: string[] = ['author', 'title', 'location', 'status'];
  constructor(
    public dialog: MatDialog,
    private _bookService: BookService,
    private _router: Router
  ) {}

  ngOnInit(): void {
    this._bookService.getBooks().subscribe((data) => {
      this.books = data;
    });
  }

  openAddBookDialog(): void {
    const dialogRef = this.dialog.open(AddBookDialog, {
      width: '400px',
    });

    dialogRef.afterClosed().subscribe((result) => {
      this.addBookData = result;
      this._bookService.addBook(result).then(() => {
        window.location.reload();
      });
    });
  }

  goToBookDetail(id) {
    this._router.navigate([`/books`, id]);
  }
}
