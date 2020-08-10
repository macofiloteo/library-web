import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DefaultLayoutComponent } from './core/default-layout/default-layout.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: DefaultLayoutComponent,
    loadChildren: () =>
      import('./views/home/home.module').then((m) => m.HomeModule),
  },

  {
    path: 'books',
    component: DefaultLayoutComponent,
    loadChildren: () =>
      import('./views/book-details/book-details.module').then(
        (m) => m.BookDetailsModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
