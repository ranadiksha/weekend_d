import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'; // Module: Gorup of logic

import { FirstComponent } from './app.component';

@NgModule({
  declarations: [FirstComponent],
  imports: [BrowserModule],
  bootstrap: [FirstComponent], // root comp
})
export class FirstModule {}
