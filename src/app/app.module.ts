import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { Ex1Component } from '../example/ex1.copmponent';
import { ChangeBackgroundDirective } from '../example/directive/changeBackground.directive';

@NgModule({
  declarations: [AppComponent, Ex1Component, ChangeBackgroundDirective],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
