import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BookDetailsComponent } from './book-details.component';

const routes: Routes = [
  {
    path: ':id',
    component: BookDetailsComponent,
    data: {
      title: 'Book Details',
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BookDetailsRoutingModule {}
