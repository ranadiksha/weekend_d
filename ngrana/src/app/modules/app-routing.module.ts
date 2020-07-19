import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { MobilesComponent } from '../products/mobiles/mobiles.component';
import { ClothesComponent } from '../products/clothes/clothes.component';
import { BooksComponent } from '../products/books/books.component';

const appRoutes: Routes = [
  {
    path: 'mobiles',
    component: MobilesComponent,
  },
  {
    path: 'clothes',
    component: ClothesComponent,
  },
  {
    path: 'books',
    component: BooksComponent,
  },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}