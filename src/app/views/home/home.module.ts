import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { CardBookComponent } from 'src/app/shared/card-book/card-book.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { AddBookDialog } from 'src/app/shared/dialog-add-book/add-book.dialog';
import { CoreModule } from 'src/app/core/core.module';
import { MatSelectModule } from '@angular/material/select';
import { BookService } from 'src/app/core/services/book.service';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CoreModule,
    SharedModule,
    HomeRoutingModule,
    CommonModule,
    MatButtonModule,
    MatIconModule,
  ],
  providers: [],
})
export class HomeModule {}
