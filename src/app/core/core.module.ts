import { NgModule } from '@angular/core';
import { DefaultLayoutComponent } from './default-layout/default-layout.component';
import { HttpClientModule } from '@angular/common/http';
import { BookService } from './services/book.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { StoreModule } from '@ngrx/store';
import { books } from './store/reducers/books.reducer';
import { currentBook } from './store/reducers/current-book.reducer';

@NgModule({
  declarations: [DefaultLayoutComponent],
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
    StoreModule.forRoot({ books, currentBook }),
    MatToolbarModule,
    MatSidenavModule,
  ],
  exports: [CommonModule],
  providers: [BookService],
  bootstrap: [],
})
export class CoreModule {}
