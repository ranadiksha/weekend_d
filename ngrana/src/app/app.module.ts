import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'; // Module: Gorup of logic

import { FirstComponent } from './app.component';
import { NavComponent } from './layouts/nav/nav.component';
import { BannerOneComponent } from './layouts/banner-one/banner-one.component';
import { ProductsComponent } from './layouts/products/products.component';
import { BannerTwoComponent } from './layouts/banner-two/banner-two.component';
import { ContactUsComponent } from './layouts/contact-us/contact-us.component';
import { BannerThreeComponent } from './layouts/banner-three/banner-three.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { SimpleStyleDirective } from './directives/simple-style.directive';
import { MobilesComponent } from './products/mobiles/mobiles.component';
import { ClothesComponent } from './products/clothes/clothes.component';
import { BooksComponent } from './products/books/books.component';
import { SqrtPipe } from './pipes/sqrt.pipe';

import { AppRoutingModule } from './modules/app-routing.module';
import { HomeComponent } from './products/home/home.component';
import { PagenotFoundComponent } from './products/pagenot-found/pagenot-found.component';

@NgModule({
  declarations: [
    FirstComponent,
    NavComponent,
    BannerOneComponent,
    ProductsComponent,
    BannerTwoComponent,
    ContactUsComponent,
    BannerThreeComponent,
    FooterComponent,
    SimpleStyleDirective,
    MobilesComponent,
    ClothesComponent,
    BooksComponent,
    SqrtPipe,
    HomeComponent,
    PagenotFoundComponent,
  ],

  imports: [BrowserModule, AppRoutingModule],
  bootstrap: [FirstComponent], // root comp
})
export class FirstModule {}
