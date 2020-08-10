import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardBookComponent } from './card-book/card-book.component';
import { AddBookDialog } from './dialog-add-book/add-book.dialog';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { BrowserModule } from '@angular/platform-browser';
import { CardCommentComponent } from './card-comment/card-comment.component';
import { AddCommentDialog } from './dialog-add-comment/add-comment.dialog';
import { EditBookDialog } from './dialog-edit-book/edit-book.dialog';
import { CheckoutBookDialog } from './dialog-checkout-book/checkout-book.dialog';

@NgModule({
  declarations: [
    CardBookComponent,
    AddBookDialog,
    CardCommentComponent,
    AddCommentDialog,
    EditBookDialog,
    CheckoutBookDialog,
  ],
  imports: [
    CommonModule,
    MatTableModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
  ],
  providers: [],
  bootstrap: [],
  exports: [
    CardBookComponent,
    AddBookDialog,
    CardCommentComponent,
    AddCommentDialog,
    EditBookDialog,
    CheckoutBookDialog,
  ],
})
export class SharedModule {}
