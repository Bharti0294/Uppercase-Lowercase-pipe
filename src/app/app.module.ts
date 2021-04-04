import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LowerCaseComponent } from './lower-case/lower-case.component';
import { UppercaseComponent } from './uppercase/uppercase.component';

@NgModule({
  declarations: [
    AppComponent,
    LowerCaseComponent,
    UppercaseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
