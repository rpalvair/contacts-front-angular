import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TheHeaderComponent } from './components/the-header/the-header.component';
import { TheFooterComponent } from './components/the-footer/the-footer.component';

@NgModule({
  declarations: [
    AppComponent,
    TheHeaderComponent,
    TheFooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
