import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { MobilesComponent } from '../products/mobiles/mobiles.component';
import { ClothesComponent } from '../products/clothes/clothes.component';
import { BooksComponent } from '../products/books/books.component';
import { HomeComponent } from '../products/home/home.component';
import { PagenotFoundComponent } from '../products/pagenot-found/pagenot-found.component';
import { SamsungComponent } from '../products/mobiles/samsung/samsung.component';
import { RedmiComponent } from '../products/mobiles/redmi/redmi.component';
import { MobileMenuComponent } from '../products/mobiles/mobile-menu/mobile-menu.component';

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
    component: MobileMenuComponent,
    children: [
      { path: '', component: MobilesComponent },
      { path: 'Samsung', component: SamsungComponent },
      { path: 'Redmi', component: RedmiComponent },
    ],
  },
  //{
  // path: 'clothes',
  //component: ClothesComponent,
  // },
  {
    path: 'clothes/:vacation',
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
