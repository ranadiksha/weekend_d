import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { MobilesComponent } from '../products/mobiles/mobiles.component';
import { ClothesComponent } from '../products/clothes/clothes.component';
import { BooksComponent } from '../products/books/books.component';
import { HomeComponent } from '../products/home/home.component';
import { PagenotFoundComponent } from '../products/pagenot-found/pagenot-found.component';

const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'Home',
    component: HomeComponent,
  },
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
  {
    path: '**',
    component: PagenotFoundComponent,
  },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
